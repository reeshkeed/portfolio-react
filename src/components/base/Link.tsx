type LinkProps = {
  name: string;
};

export const Link = ({ name }: LinkProps) => {
  return (
    <a className="h-12 grid place-content-center text-white xl:ml-8" href="">
      {name}
    </a>
  );
};
