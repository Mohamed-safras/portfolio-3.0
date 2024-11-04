import { PortableTextReactComponents } from "next-sanity";
import Link from "next/link";

export const PortableTextAdapter: Partial<PortableTextReactComponents> = {
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  types: {
    // image: CustomImage,
    code: ({ value }) => <code />,
  },
  block: {
    h1: ({ children }) => <h1>{children}</h1>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    normal: ({ children }) => <p>{children}</p>,
    blockquote: ({ children }) => <span>{children}</span>,
  },
  marks: {
    link: ({ children, value }) => <Link href={value.href}> {children}</Link>,
  },
};
