import Angela from "/src/assets/avatar-angela-gray.webp"
import Anna from "/src/assets/avatar-anna-kim.webp"
import Jacob from "/src/assets/avatar-jacob-thompson.webp"
import Kimberly from "/src/assets/avatar-kimberly-smith.webp"
import Mark from "/src/assets/avatar-mark-webber.webp"
import Nathan from "/src/assets/avatar-nathan-peterson.webp"
import Rizky from "/src/assets/avatar-rizky-hasanuddin.webp"
import Post from "/src/assets/image-chess.webp"


export default [
    {
        id: 1,
        name: "Mark Webber",
        profile_picture: Mark,
        group: null,
        message:null,
        notificationType: {
            isReaction: true,
            isPrivateMesage: false,
            isComment: false,
            isReply: false,
            isNewFollower: false,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: false,
            isLeftRelatedGroup: false,
        },
        isUnread: true,
        notificationReference: "My first tournament today",
        howLongAgo: "1m ago"
    },
    {
        id: 2,
        name: "Angela Gray",
        profile_picture: Angela,
        group: null,
        message:null,
        notificationType: {
            isReaction: false,
            isPrivateMesage: false,
            isComment: false,
            isReply: false,
            isNewFollower: true,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: false,
            isLeftRelatedGroup: false,
        },
        isUnread: true,
        notificationReference: null,
        howLongAgo: "5m ago"
    },
    {
        id: 3,
        name: "Jacob Thompson",
        profile_picture: Jacob,
        group: "Chess Club",
        message:null,
        notificationType: {
            isReaction: false,
            isPrivateMesage: false,
            isComment: false,
            isReply: false,
            isNewFollower: false,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: true,
            isLeftRelatedGroup: false,
        },
        isUnread: true,
        notificationReference: "Chess Club",
        howLongAgo: "1 day ago"
    },
    {
        id: 4,
        name: " Rizky Hasanuddin",
        profile_picture: Rizky,
        group: null,
        message:`   Hello, thanks for setting up the Chess Club. 
                    I've been a member for a few weeks now and \n 
                    I'm already having lots of fun and improving my game.\n`,
        notificationType: {
            isReaction: false,
            isPrivateMesage: true,
            isComment: false,
            isReply: false,
            isNewFollower: false,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: false,
            isLeftRelatedGroup: false,
        },
        isUnread: true,
        notificationReference: null,
        howLongAgo: "5 days ago"
    },
    {
        id: 5,
        name: "Kimberly Smith",
        profile_picture: Kimberly,
        group: null,
        message:null,
        notificationType: {
            isReaction: false,
            isPrivateMesage: false,
            isComment: true,
            isReply: false,
            isNewFollower: false,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: false,
            isLeftRelatedGroup: false,
        },
        isUnread: true,
        notificationReference: Post,
        howLongAgo: "1 week ago"
    },
    {
        id: 6,
        name: "Nathan Peterson",
        profile_picture: Nathan,
        group: null,
        message:null,
        notificationType: {
            isReaction: true,
            isPrivateMesage: false,
            isComment: false,
            isReply: false,
            isNewFollower: false,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: false,
            isLeftRelatedGroup: false,
        },
        isUnread: true,
        notificationReference: "end-game strategies to increase your win rate",
        howLongAgo: "2 weeks ago"
    },
    {
        id: 7,
        name: "Anna Kim",
        profile_picture: Anna,
        group: "Chess Club",
        message:null,
        notificationType: {
            isReaction: false,
            isPrivateMesage: false,
            isComment: false,
            isReply: false,
            isNewFollower: false,
            isUnfollowedUser: false,
            isJoinedARelatedGroup: false,
            isLeftRelatedGroup: true,
        },
        isUnread: true,
        notificationReference: "Chess Club",
        howLongAgo: "2 weeks ago"
    },
]
