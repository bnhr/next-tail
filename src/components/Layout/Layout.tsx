import type { ChildrenProps } from '@/types/default'

function Layout({ children }: ChildrenProps) {
  return <div className="container">{children}</div>
}

export default Layout
