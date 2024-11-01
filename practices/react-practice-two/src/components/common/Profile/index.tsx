// import common components
import { Avatar, Paragraph } from '@/components/common';

// import types
import { ParagraphVariant, TextSize } from '@/types';

interface ProfileProps {
  fullName: string;
  position: string;
  avatarUrl: string;
}

const Profile = ({ fullName, position, avatarUrl }: ProfileProps) => (
  <div className="flex items-center gap-5">
    <Avatar url={avatarUrl} alt={fullName} />
    <div>
      <Paragraph variant={ParagraphVariant.Medium} text={fullName} className="leading-base mb-1" />
      <Paragraph size={TextSize.ExtraSmall} text={position} />
    </div>
  </div>
);

export default Profile;
