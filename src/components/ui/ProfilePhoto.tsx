const sizes = {
  sm: 'h-16 w-16',
  md: 'h-24 w-24',
  lg: 'h-40 w-40 sm:h-48 sm:w-48',
}

interface ProfilePhotoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function ProfilePhoto({ size = 'md', className = '' }: ProfilePhotoProps) {
  return (
    <div className={`${sizes[size]} shrink-0 ${className}`}>
      <img
        src="/profile.png"
        alt="Omar Adel"
        className="h-full w-full rounded-full object-cover border-2 border-border ring-2 ring-blue-500/20"
      />
    </div>
  )
}
