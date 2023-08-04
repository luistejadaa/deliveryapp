import { ApplyPromotionResponse, Location, PromotionResponse } from "../../models";
import { APIResponse } from "../../network";


interface IPromotionsService {
    /**
     * Get the list of promotions.
     * @returns A Promise that resolves to an array of promotions.
     */
    getPromotions: (location: Location) => Promise<APIResponse<PromotionResponse>[]>;

    /**
     * Apply a promotion to the current order.
     * @param promotionId The ID of the promotion to apply.
     * @returns A Promise that resolves to an APIResponse containing a message and a success flag.
     */
    applyPromotion: (promotionId: string) => Promise<APIResponse<ApplyPromotionResponse>>;
}

export type { IPromotionsService };