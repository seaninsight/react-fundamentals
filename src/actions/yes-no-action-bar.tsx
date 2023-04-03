/** Action bar with Yes & No */
import { ActionButtonProps } from "./action-button";
import { ActionBar } from "./action-bar";

const YES_NO_ACTIONS: ActionButtonProps[] = [
  {
    title: "Yes",
    onClick: (event) => console.info("clicked Yes", event.target),
    className: "neutron-primary-action",
  },
  {
    title: "No",
    onClick: () => console.info("clicked No"),
  },
];
/**
 * Action bar of Yes & No.
 */
export const YesNoActionBar = (): JSX.Element => {
  return <ActionBar actions={YES_NO_ACTIONS} />;
};
