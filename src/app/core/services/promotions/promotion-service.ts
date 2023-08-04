import { Location, PromotionResponse, ApplyPromotionResponse } from "../../models";
import { APIResponse } from "../../network";
import { IPromotionsService } from "./interface";

class PromotionService implements IPromotionsService {
    
    getPromotions = (location: Location): Promise<APIResponse<PromotionResponse>[]> => {
        throw new Error("Method not implemented.");
    }
    applyPromotion = (promotionId: string): Promise<APIResponse<ApplyPromotionResponse>> => {
        throw new Error("Method not implemented.");
    }
}

const promotionService: IPromotionsService = new PromotionService();
export { promotionService };