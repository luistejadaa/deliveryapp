import { UserProfileResponse, UserProfile, LikeProductResponse, DislikeProductResponse } from "../../models";
import { ProductsResponse } from "../../models/response/products-response";
import { APIResponse } from "../../network";
import { IUserProfileService } from "./interface";

class UserProfileService implements IUserProfileService {

    getUserProfile = (): Promise<UserProfileResponse> => {
        throw new Error("Method not implemented.");
    }
    updateUserProfile = (userProfile: UserProfile): Promise<UserProfileResponse> => {
        throw new Error("Method not implemented.");
    }
    likeProduct = (productId: string): Promise<LikeProductResponse> => {
        throw new Error("Method not implemented.");
    }
    dislikeProduct = (productId: string): Promise<DislikeProductResponse> => {
        throw new Error("Method not implemented.");
    }
    getProductsLiked = (): Promise<APIResponse<ProductsResponse[]>> => {
        throw new Error("Method not implemented.");
    }
}

const userProfileService: IUserProfileService = new UserProfileService();
export { userProfileService };