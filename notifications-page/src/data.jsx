export default [
    {
        id: 1,
        name: "Mark Webber",
        profile_picture: "/public/avatar-mark-webber.webp",
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
        profile_picture: "/public/avatar-angela-gray.webp",
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
        profile_picture: "/public/avatar-jacob-thompson.webp",
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
        profile_picture: "/public/avatar-rizky-hasanuddin.webp",
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
        profile_picture: "/public/avatar-kimberly-smith.webp",
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
        notificationReference: "/public/image-chess.webp",
        howLongAgo: "1 week ago"
    },
    {
        id: 6,
        name: "Nathan Peterson",
        profile_picture: "/public/avatar-nathan-peterson.webp",
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
        profile_picture: "/public/avatar-anna-kim.webp",
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
