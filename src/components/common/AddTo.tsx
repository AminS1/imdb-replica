import classes from "./AddTo.module.scss";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";

const AddTo = () => {
  return (
    <div className={classes.addTo}>
      <PlusIcon className={classes.plusIcon} />
    </div>
  );
};

export default AddTo;
