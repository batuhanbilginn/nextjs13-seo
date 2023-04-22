import parse, { HTMLReactParserOptions } from "html-react-parser";

const getParsedHTML = (body: string) => {
  const options: HTMLReactParserOptions = {
    /*  replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        if (domNode.name === "img") {
          const { src, alt } = domNode.attribs;

          return (
            <Image
              className="rounded-md w-full object-cover object-center h-auto max-h-[300px] md:max-h-[500px]"
              width={1220}
              height={628}
              alt={alt}
              src={src}
            />
          );
        }
      }
    }, */
  };

  return parse(body, options);
};

export default getParsedHTML;
