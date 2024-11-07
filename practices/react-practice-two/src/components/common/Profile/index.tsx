// import common components
import { Avatar, Paragraph } from '@/components/common';

// import types
import { ParagraphVariant, TextSize } from '@/types';

// import images
import { DefaultAvatar } from '@/assets/images';

interface ProfileProps {
  fullName: string;
  position: string;
  avatarUrl?: string;
}

const Profile = ({ fullName, position, avatarUrl = DefaultAvatar }: ProfileProps) => (
  <div className="flex items-center justify-center gap-5 text-left">
    <Avatar url={avatarUrl} alt={fullName || 'Avatar Default'} />
    <div>
      <Paragraph variant={ParagraphVariant.Medium} text={fullName} className="leading-base mb-1" />
      <Paragraph size={TextSize.ExtraSmall} text={position} />
    </div>
  </div>
);

export default Profile;
