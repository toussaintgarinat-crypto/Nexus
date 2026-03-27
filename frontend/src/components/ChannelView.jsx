import MixedChannel from './MixedChannel'
import VoiceChannel from './VoiceChannel'

export default function ChannelView({ channel, world, user, llmConfig }) {
  if (!channel) return null

  if (channel.type === 'voice') {
    return <VoiceChannel channel={channel} world={world} user={user} llmConfig={llmConfig} />
  }

  // text and mixed both use the full AI + chat view
  return <MixedChannel channel={channel} world={world} user={user} llmConfig={llmConfig} />
}
