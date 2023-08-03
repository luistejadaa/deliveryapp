import { CreditCardResponse, CreditCard, DeleteCreditCardResponse, SetDefaultCreditCardResponse } from "../../models";
import { APIResponse } from "../../network";
import { ICreditCardService } from "./interface";

class CreditCardService implements ICreditCardService {

    getCreditCards = (): Promise<APIResponse<CreditCardResponse[]>> => {
        throw new Error("Method not implemented.");
    }
    addCreditCard = (creditCard: CreditCard): Promise<APIResponse<CreditCardResponse>> => {
        throw new Error("Method not implemented.");
    }
    deleteCreditCard = (creditCardId: string): Promise<APIResponse<DeleteCreditCardResponse>> => {
        throw new Error("Method not implemented.");
    }
    setDefaultCreditCard = (creditCardId: string): Promise<APIResponse<SetDefaultCreditCardResponse>> => {
        throw new Error("Method not implemented.");
    }

}

const creditCardService: ICreditCardService = new CreditCardService();
export { creditCardService };