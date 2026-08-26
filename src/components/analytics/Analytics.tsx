import { GoogleAnalytics } from '@next/third-parties/google'

export function Analytics({
  gaId,
}: {
  gaId?: string
}): React.JSX.Element | null {
  if (!gaId) return null

  return <GoogleAnalytics gaId={gaId} />
}
