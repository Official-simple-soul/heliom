import NoDevice from "@/components/NoDevice";
import BuyerSubTable from "./BuyerSubTable";
import { subTableData } from "../../data/subTableData";

export default function Subcriptions() {
  return (
    <div>
      {subTableData.length > 0 ? (
        <BuyerSubTable tableData={subTableData} />
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
