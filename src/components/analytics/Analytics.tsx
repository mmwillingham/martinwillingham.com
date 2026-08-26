import { GoogleAnalytics } from '@next/third-parties/google'

interface AnalyticsProps {
  gaId?: string
}

export function Analytics({ gaId }: AnalyticsProps): React.JSX.Element | null {
  if (!gaId) {
    return null
  }

  return <GoogleAnalytics gaId={gaId} />
}
