import Billboard from '@/components/billboard';
import getBillboard from '@/features/billboard/action';

export default async function Page() {
  const billboard = await getBillboard();

  return (
    <div className="pt-10">
      <Billboard data={billboard[0]} />
    </div>
  );
}
