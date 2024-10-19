// TODO: This should be reworked
const idCount = 100;

export async function generateStaticParams() {
  const ids = Array.from({ length: idCount }, (_, i) => ({
    id: (i + 1).toString(),
  }));
  return ids;
}
