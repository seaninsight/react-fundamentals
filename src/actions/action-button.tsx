/**
 * Action button.
 */
import React from "react";

/** Structure of ActionButton properties */
export interface ActionButtonProps {
  /** Display on the button */
  title: string;
  /** Click handler function (optional) */
  onClick?: React.EventHandler<React.MouseEvent>;
  /** Additional class name(s) to apply */
  className?: string;
}

export const ActionButton = (props: ActionButtonProps): JSX.Element => {
  return (
    <button
      className={"neutron-action-button " + props.className}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
