import { NxtpError } from "@connext/nxtp-utils";

export class ParamsInvalid extends NxtpError {
  cancellable = true;
  constructor(context: any = {}) {
    super(`Params invalid`, context, "ParamsInvalid");
  }
}