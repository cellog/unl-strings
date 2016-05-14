import React, {PropTypes} from 'react'

const Link = ({href, onClick = () => null, ...props}, context) => {
  const makePath = (loc) => {
    if (typeof loc === 'string') return loc
    let ret = loc.pathname
    if (loc.query) ret = `ret?${loc.query}`
    if (loc.hash) ret = `ret#${loc.hash}`
    return ret
  }
  return (
    <a {...props} href={makePath(href) } onClick={(e) => {
      if (e.preventDefault) e.preventDefault()
      onClick(href, context.router ? context.router : {push() {}, goBack() {}})
    }} />
  )
}

export function goToLink(link, router) {
  router.push(link)
}

export function goBackLink(link, router) {
  router.goBack()
}

Link.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default Link
