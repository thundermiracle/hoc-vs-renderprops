import NextLinkOrigin from 'next/link';

export const NextLink = (props) => {
  const { href } = props;

  let as = href;
  if (typeof href === 'object') {
    as = {
      ...href,
      pathname: `${process.env.SUBFOLDER}${href.pathname}`,
    };
  }

  return <NextLinkOrigin {...props} as={as} />;
};

export const Link = ({ href, ...restProps }) => <link {...restProps} href={`${process.env.SUBFOLDER}${href}`} />;

export const Img = ({ src, alt, ...restProps }) => <img {...restProps} alt={alt} src={`${process.env.SUBFOLDER}${src}`} />;
