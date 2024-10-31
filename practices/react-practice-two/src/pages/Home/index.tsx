import { Heading, Input } from '@/components/common';

import { TextSize } from '@/types';

const Home = () => (
  <>
    <Heading level={1} size={TextSize.ExtraLarge} spanContent="LET'S RIDE" text="THE FUTURE." />
    <Input name="email" type="email" placeholder="Enter your email." />
  </>
);

export default Home;
