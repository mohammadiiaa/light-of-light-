import { useState, useEffect } from 'react'
import AgoraRTC, {
  IAgoraRTCClient,
  IAgoraRTCRemoteUser,
  ICameraVideoTrack,
  IMicrophoneAudioTrack,
} from 'agora-rtc-react'

const appId = process.env.NEXT_PUBLIC_AGORA_APP_ID || ''

export function useAgora() {
  const [client, setClient] = useState<IAgoraRTCClient | null>(null)
  const [localVideoTrack, setLocalVideoTrack] = useState<ICameraVideoTrack | null>(null)
  const [localAudioTrack, setLocalAudioTrack] = useState<IMicrophoneAudioTrack | null>(null)
  const [remoteUsers, setRemoteUsers] = useState<IAgoraRTCRemoteUser[]>([])

  useEffect(() => {
    const agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
    setClient(agoraClient)

    return () => {
      agoraClient.removeAllListeners()
    }
  }, [])

  const join = async (channel: string) => {
    if (!client) return

    try {
      const [audioTrack, videoTrack] = await AgoraRTC.createMicrophoneAndCameraTracks()
      setLocalAudioTrack(audioTrack)
      setLocalVideoTrack(videoTrack)

      await client.join(appId, channel, null, null)
      await client.publish([audioTrack, videoTrack])

      client.on('user-published', async (user, mediaType) => {
        await client.subscribe(user, mediaType)
        if (mediaType === 'video') {
          setRemoteUsers((prev) => [...prev, user])
        }
      })

      client.on('user-unpublished', (user) => {
        setRemoteUsers((prev) => prev.filter((u) => u.uid !== user.uid))
      })
    } catch (error) {
      console.error('Error joining channel:', error)
    }
  }

  const leave = async () => {
    if (!client) return

    try {
      localAudioTrack?.close()
      localVideoTrack?.close()
      await client.leave()
      setLocalAudioTrack(null)
      setLocalVideoTrack(null)
      setRemoteUsers([])
    } catch (error) {
      console.error('Error leaving channel:', error)
    }
  }

  return {
    localVideoTrack,
    remoteUsers,
    join,
    leave,
  }
} 