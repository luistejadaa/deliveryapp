import { DislikeProductResponse, LikeProductResponse, UserProfile, UserProfileResponse } from "../../models";
import { ProductsResponse } from "../../models/response/products-response";
import { APIResponse } from "../../network";

interface IUserProfileService {
    getUserProfile(): Promise<UserProfileResponse>;
    updateUserProfile(userProfile: UserProfile): Promise<UserProfileResponse>;
    likeProduct(productId: string): Promise<LikeProductResponse>;
    dislikeProduct(productId: string): Promise<DislikeProductResponse>;
    getProductsLiked(): Promise<APIResponse<ProductsResponse[]>>;
}

export type { IUserProfileService };
