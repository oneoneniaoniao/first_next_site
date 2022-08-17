export default function Content({children}) {
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>copyright 2022 Maru</footer>
    </>
  );
}
