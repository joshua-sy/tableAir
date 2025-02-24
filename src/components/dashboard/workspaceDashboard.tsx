import { api } from '~/utils/api';
import { useRouter } from 'next/router';

interface WorkspaceDashboardProps {
  workspaceID: number;
}

export default function WorkspaceDashboard({ workspaceID }: WorkspaceDashboardProps) {
  const router = useRouter();
  const createBase = api.base.createBase.useMutation();
  const createTable = api.table.createTable.useMutation();
  const handleCreateBase = async () => {
    try {
      const base = await createBase.mutateAsync({ workspaceID, baseName: "Untitled Base" });
      if (!base[0]) {
        throw new Error("Failed to create table");
      }
      const table = await createTable.mutateAsync({baseID: base[0].id , tableName: "Table 1"});
      let currentUrl = window.location.href;
      currentUrl = currentUrl.substring(0, currentUrl.length - 1);

      console.log(currentUrl);
      if (!table[0]) {
        throw new Error("Failed to create table");
      }
      router.push(`${currentUrl}${table[0].id}`);
      alert("Base and Table created successfully!");
    } catch (error) {
      console.error("Failed to create Base and table:", error);
    }
  };

  return <>
    <div className="flex">
      <div id="workspace-dashboard-bases" className="w-2/3">
        {workspaceID <= 0 ? 
        <div>
          Home
        </div> 
        : <div>
          Workspace
          </div>}
      </div>
      <div id="workspace-dashboard-sidePanel" className="w-1/3 ">
        {workspaceID <= 0 ? 
          <div>
            Home
          </div> : 
          <div className="border rounded-full bg-blue-800 text-lg p-5 w-36 text-center text-white hover:bg-blue-500" onClick={handleCreateBase}>
            Create
          </div>

        }
        
      </div>
    </div>
  </>
}