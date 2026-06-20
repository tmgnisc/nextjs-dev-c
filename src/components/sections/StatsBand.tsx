import Container from '@/components/ui/Container';
import Stat from '@/components/ui/Stat';

export default function StatsBand({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-8 rounded-card border border-line bg-surface/50 p-8 md:grid-cols-4 md:p-12">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </Container>
  );
}
