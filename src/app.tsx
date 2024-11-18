import { Dialog } from "./components/ui/dialog";
import { CreateGoal } from "./components/create-goal";
import { Summary } from "./components/summary";
import { EmptyGoals } from "./components/empty-goals";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "./http/get-summary";

export function App() {
  const { data } = useQuery({
    queryKey: ["summary"], //"id" da requisição
    queryFn: getSummary,
    staleTime: 1000 * 60, // cache interno. Aqui está definido como buscar dados a cada 1 min e armazenar estes dados na aplicação. Dessa forma, evita-se realizar várias requisições para obter os dados.
  });

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  );
}

export default App;
