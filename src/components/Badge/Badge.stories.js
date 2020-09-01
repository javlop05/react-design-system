import React from "react";
import Badge from "./Badge";

export default { title: "Badge" };

export const successBadge = () => <Badge text="Success" type="success" />;

export const warningBadge = () => <Badge text="Warning" type="warning" />;

export const errorBadge = () => <Badge text="Error" type="error" />;
