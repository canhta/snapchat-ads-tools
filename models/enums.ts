export enum EStatus {
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
}

// Ad accounts
export enum EObjective {
  BRAND_AWARENESS = 'BRAND_AWARENESS',
  WEB_CONVERSION = 'WEB_CONVERSION',
}

export enum EBillingType {
  REVOLVING = 'REVOLVING',
  IO = 'IO',
}

export enum ECurrency {
  AUD = 'AUD',
  CAD = 'CAD',
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
}

export enum EAccountType {
  DIRECT = 'DIRECT',
  PARTNER = 'PARTNER',
}

// Ad squads

export enum EBidStrategy {
  AUTO_BID = 'AUTO_BID',
  LOWEST_COST_WITH_MAX_BID = 'LOWEST_COST_WITH_MAX_BID',
  MIN_ROAS = 'MIN_ROAS',
  TARGET_COST = 'TARGET_COST',
}

export enum EOptimizationGoal {
  IMPRESSIONS = 'IMPRESSIONS',
  SWIPES = 'SWIPES',
  APP_INSTALLS = 'APP_INSTALLS',
  VIDEO_VIEWS = 'VIDEO_VIEWS',
  VIDEO_VIEWS_15_SEC = 'VIDEO_VIEWS_15_SEC',
  USES = 'USER',
  STORY_OPENS = 'STORY_OPENS',
  PIXEL_PAGE_VIEW = 'PIXEL_PAGE_VIEW',
  PIXEL_ADD_TO_CART = 'PIXEL_ADD_TO_CART',
  PIXEL_PURCHASE = 'PIXEL_PURCHASE',
  PIXEL_SIGNUP = 'PIXEL_SIGNUP',
  APP_ADD_TO_CART = 'APP_ADD_TO_CART',
  APP_PURCHASE = 'APP_PURCHASE',
  APP_SIGNUP = 'APP_SIGNUP',
}

export enum EAdSquadType {
  SNAP_ADS = 'SNAP_ADS',
  LENS = 'LENS',
  FILTER = 'FILTER',
}

export enum EDeliveryConstraint {
  DAILY_BUDGET = 'DAILY_BUDGET',
  LIFETIME_BUDGET = 'LIFETIME_BUDGET',
  REACH_AND_FREQUENCY = 'REACH_AND_FREQUENCY',
}

//  Ads

export enum EAdType {
  SNAP_AD = 'SNAP_AD',
  LONGFORM_VIDEO = 'LONGFORM_VIDEO',
  APP_INSTALL = 'APP_INSTALL',
  REMOTE_WEBPAGE = 'REMOTE_WEBPAGE',
  STORY = 'STORY',
  AD_TO_LENS = 'AD_TO_LENS',
  AD_TO_CALL = 'AD_TO_CALL',
  AD_TO_MESSAGE = 'AD_TO_MESSAGE',
  FILTER = 'FILTER',
  LENS = 'LENS',
  LENS_WEB_VIEW = 'LENS_WEB_VIEW',
  LENS_APP_INSTALL = 'LENS_APP_INSTALL',
  LENS_DEEP_LINK = 'LENS_DEEP_LINK',
  LENS_LONGFORM_VIDEO = 'LENS_LONGFORM_VIDEO',
  COLLECTION = 'COLLECTION',
  LEAD_GENERATION = 'LEAD_GENERATION',
}
