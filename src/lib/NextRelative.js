import NextLinkOrigin from 'next/link';

const Styles = {
  NextLink: {
    a: {
      textDecoration: 'none',
    },
  },
};

export const NextLink = (props) => {
  const { href, children } = props;

  let as = href;
  if (typeof href === 'object') {
    as = {
      ...href,
      pathname: `${process.env.SUBFOLDER}${href.pathname}`,
    };
  } else {
    as = `${process.env.SUBFOLDER}${href}`;
  }

  return (
    <NextLinkOrigin {...props} as={as}>
      <a style={Styles.NextLink.a}>{children}</a>
    </NextLinkOrigin>
  );
};

export const Link = ({ href, ...restProps }) => <link {...restProps} href={`${process.env.SUBFOLDER}${href}`} />;

export const Img = ({ src, alt, ...restProps }) => <img {...restProps} alt={alt} src={`${process.env.SUBFOLDER}${src}`} />;
