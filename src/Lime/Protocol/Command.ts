import {Envelope} from "./Envelope";
import {Reason} from "./Reason";

export interface Command extends Envelope {
  uri?: string;
  type?: string;
  resource?: any;
  method: CommandMethod;
  status?: CommandStatus;
  reason?: Reason;
}

export interface CommandListener {
  onCommand(command: Command): void;
}

export const CommandMethod = {
  GET: <CommandMethod> "get",
  SET: <CommandMethod> "set",
  DELETE: <CommandMethod> "delete",
  OBSERVE: <CommandMethod> "observe",
  SUBSCRIBE: <CommandMethod> "subscribe"
}
export type CommandMethod
  = "get"
  | "set"
  | "delete"
  | "observe"
  | "subscribe"
  ;

export const CommandStatus = {
  SUCCESS: <CommandStatus> "success",
  FAILURE: <CommandStatus> "failure"
}
export type CommandStatus
  = "success"
  | "failure"
  ;
