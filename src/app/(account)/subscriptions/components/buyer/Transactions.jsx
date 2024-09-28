import NoDevice from "@/components/NoDevice";
import BuyerTransTable from "./BuyerTransTable";
import { transDataTable } from "../../data/transTableData";

export default function Transactions() {
  return (
    <div>
      {transDataTable.length > 0 ? (
        <BuyerTransTable tableData={transDataTable} />
      ) : (
        <div className="flex flex-col justify-center items-center h-96">
          <NoDevice
            text="No Devices Added"
            subText="All your devices will be displayed here"
          />
        </div>
      )}
    </div>
  );
}
