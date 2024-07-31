import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          你好，我是 <GradientText>曾平</GradientText> 👋
        </>
      }
      description={
        <>
          我在使用Astro搭建网站,它{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            非常简单
          </a>{' '}
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={<></>}
    />
  </Section>
);

export { Hero };
