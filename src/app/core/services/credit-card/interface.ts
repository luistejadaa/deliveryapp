import { CreditCard, CreditCardResponse, DeleteCreditCardResponse, SetDefaultCreditCardResponse } from "../../models";
import { APIResponse } from "../../network";

interface ICreditCardService {
    /**
     * Retrieves a list of credit cards.
     * @returns A promise that resolves to an APIResponse containing an array of CreditCardResponse objects.
     */
    getCreditCards(): Promise<APIResponse<CreditCardResponse[]>>;

    /**
     * Adds a credit card.
     * @param creditCard The credit card to add.
     * @returns A promise that resolves to an APIResponse containing a CreditCardResponse object.
     */
    addCreditCard(creditCard: CreditCard): Promise<APIResponse<CreditCardResponse>>;

    /**
     * Deletes a credit card.
     * @param creditCardId The ID of the credit card to delete.
     * @returns A promise that resolves to an APIResponse containing undefined.
     */
    deleteCreditCard(creditCardId: string): Promise<APIResponse<DeleteCreditCardResponse>>;

    /**
     * Sets the default credit card.
     * @param creditCardId The ID of the credit card to set as default.
     * @returns A promise that resolves to an APIResponse containing undefined.
     */
    setDefaultCreditCard(creditCardId: string): Promise<APIResponse<SetDefaultCreditCardResponse>>;
}

export type { ICreditCardService };