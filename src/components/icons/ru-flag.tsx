export function RuFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 2C0 0.895432 0.895431 0 2 0H26C27.1046 0 28 0.895431 28 2V5.33333H0V2Z"
        fill="white"
      />
      <rect y="5.33331" width="28" height="5.33333" fill="#0131A8" />
      <path
        d="M0 10.6667H28V14C28 15.1046 27.1046 16 26 16H2C0.895431 16 0 15.1046 0 14V10.6667Z"
        fill="#D6261A"
      />
    </svg>
  )
}
