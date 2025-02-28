import { SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} fill="none" {...props}>
    <path
      fill="#718096"
      d="m10.814 8.499-.114-.14c-.516-.623-.828-1-.828-2.765 0-.914-.218-1.664-.65-2.226-.317-.416-.747-.731-1.313-.964a.07.07 0 0 1-.02-.016C7.687 1.706 7.13 1.25 6.5 1.25s-1.186.457-1.39 1.139a.073.073 0 0 1-.018.015c-1.322.544-1.964 1.587-1.964 3.19 0 1.767-.311 2.143-.827 2.766l-.115.14a.824.824 0 0 0-.11.88.876.876 0 0 0 .806.495h7.24c.35 0 .655-.19.8-.492a.825.825 0 0 0-.108-.883ZM6.5 11.75a1.876 1.876 0 0 0 1.65-.988.094.094 0 0 0-.082-.137H4.932a.095.095 0 0 0-.08.045.093.093 0 0 0-.003.092 1.876 1.876 0 0 0 1.651.988Z"
    />
  </svg>
);

export default NotificationIcon;
