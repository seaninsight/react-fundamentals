/**
 * Action bar.
 */
import { ActionButton, ActionButtonProps } from "./action-button";

export const ActionBar = (props: {
  actions: ActionButtonProps[];
}): JSX.Element => {
  return (
    <ul className="neutron-action-bar">
      {props.actions.map((action, index) => (
        <li key={"action-" + index}>
          <ActionButton {...action} />
        </li>
      ))}
    </ul>
  );
};
