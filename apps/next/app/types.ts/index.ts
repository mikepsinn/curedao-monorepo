import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { useQuery, useMutation, useQueryClient, type QueryClient, type UseMutationOptions, type UseQueryOptions, type MutationFunction, type UseMutationResult, type UseQueryResult } from "react-query";
export type AppSettings = {
    additionalSettings?: {};
    appDescription?: string;
    appDesign?: {};
    appDisplayName?: string;
    appStatus?: {};
    appType?: string;
    buildEnabled?: string;
    clientId?: string;
    clientSecret?: string;
    collaborators?: User[];
    createdAt?: string;
    userId?: number;
    users?: User[];
    redirectUri?: string;
    companyName?: string;
    homepageUrl?: string;
    iconUrl?: string;
    longDescription?: string;
    splashScreen?: string;
    textLogo?: string;
};
export type AppSettingsResponse = {
    appSettings?: AppSettings;
    description: string;
    summary: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type AuthorizedClients = {
    apps: AppSettings[];
    individuals: AppSettings[];
    studies: AppSettings[];
};
export type Button = {
    accessibilityText?: string;
    action?: {};
    additionalInformation?: string;
    color?: string;
    confirmationText?: string;
    functionName?: string;
    parameters?: {};
    html?: string;
    id?: string;
    image?: string;
    ionIcon?: string;
    link: string;
    stateName?: string;
    stateParams?: {};
    successToastText?: string;
    successAlertTitle?: string;
    successAlertBody?: string;
    text: string;
    tooltip?: string;
    webhookUrl?: string;
};
export type Card = {
    actionSheetButtons?: Button[];
    avatar?: string;
    avatarCircular?: string;
    backgroundColor?: string;
    buttons?: Button[];
    buttonsSecondary?: Button[];
    content?: string;
    headerTitle?: string;
    html?: string;
    htmlContent?: string;
    id: string;
    image?: string;
    inputFields?: InputField[];
    ionIcon?: string;
    link?: string;
    parameters?: {};
    selectedButton?: Button;
    sharingBody?: string;
    sharingButtons?: Button[];
    sharingTitle?: string;
    subHeader?: string;
    subTitle?: string;
    title?: string;
};
export type Chart = {
    highchartConfig?: {};
    chartId?: string;
    chartTitle?: string;
    explanation?: string;
    svgUrl?: string;
    svg?: string;
};
export type CommonResponse = {
    description: string;
    summary: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type ConnectInstructions = {
    parameters?: {}[];
    url: string;
    usePopup?: boolean;
};
export type ConversionStep = {
    operation: "ADD" | "MULTIPLY";
    value: number;
};
export type HyperParameterCorrelation = {
    averageDailyHighCause?: number;
    averageDailyLowCause?: number;
    averageEffect?: number;
    averageEffectFollowingHighCause?: number;
    averageEffectFollowingLowCause?: number;
    averageForwardPearsonCorrelationOverOnsetDelays?: number;
    averageReversePearsonCorrelationOverOnsetDelays?: number;
    averageVote?: number;
    causeChanges?: number;
    causeDataSource?: DataSource;
    causeUserVariableShareUserMeasurements?: number;
    causeVariableCategoryId?: number;
    causeVariableCategoryName?: string;
    causeVariableCombinationOperation?: string;
    causeVariableUnitAbbreviatedName?: string;
    causeVariableId?: number;
    causeVariableMostCommonConnectorId?: number;
    causeVariableName: string;
    confidenceInterval?: number;
    confidenceLevel?: string;
    correlationCoefficient?: number;
    correlationIsContradictoryToOptimalValues?: boolean;
    createdAt?: string;
    criticalTValue?: number;
    direction?: string;
    durationOfAction?: number;
    durationOfActionInHours?: number;
    degreesOfFreedom?: number;
    effectNumberOfProcessedDailyMeasurements?: number;
    error?: string;
    effectChanges?: number;
    effectDataSource?: DataSource;
    effectSize?: string;
    effectUnit?: string;
    effectUserVariableShareUserMeasurements?: number;
    effectVariableCategoryId?: number;
    effectVariableCategoryName?: string;
    effectVariableCombinationOperation?: string;
    effectVariableCommonAlias?: string;
    effectVariableUnitAbbreviatedName?: string;
    effectVariableUnitId?: number;
    effectVariableUnitName?: string;
    effectVariableId?: number;
    effectVariableMostCommonConnectorId?: number;
    effectVariableName: string;
    experimentEndTime?: string;
    experimentStartTime?: string;
    forwardSpearmanCorrelationCoefficient?: number;
    numberOfPairs?: number;
    onsetDelay?: number;
    onsetDelayInHours?: number;
    onsetDelayWithStrongestPearsonCorrelation?: number;
    onsetDelayWithStrongestPearsonCorrelationInHours?: number;
    optimalPearsonProduct?: number;
    outcomeFillingValue?: number;
    outcomeMaximumAllowedValue?: number;
    outcomeMinimumAllowedValue?: number;
    pearsonCorrelationWithNoOnsetDelay?: number;
    predictivePearsonCorrelation?: number;
    predictivePearsonCorrelationCoefficient?: number;
    predictorDataSources?: string;
    predictorFillingValue?: number;
    predictorMaximumAllowedValue?: number;
    predictorMinimumAllowedValue?: number;
    predictsHighEffectChange?: number;
    predictsLowEffectChange?: number;
    pValue?: number;
    qmScore?: number;
    reversePearsonCorrelationCoefficient?: number;
    shareUserMeasurements?: boolean;
    sharingDescription?: string;
    sharingTitle?: string;
    significantDifference?: boolean;
    statisticalSignificance?: number;
    strengthLevel?: string;
    strongestPearsonCorrelationCoefficient?: number;
    studyHtml?: StudyHtml;
    studyImages?: StudyImages;
    studyLinks?: StudyLinks;
    studyText?: StudyText;
    tValue?: number;
    updatedAt?: string;
    userId?: number;
    userVote?: number;
    valuePredictingHighOutcome?: number;
    valuePredictingLowOutcome?: number;
    outcomeDataSources?: string;
    principalInvestigator?: string;
    reverseCorrelation?: number;
    averagePearsonCorrelationCoefficientOverOnsetDelays?: number;
    causeNumberOfRawMeasurements?: number;
    numberOfUsers?: number;
    rawCauseMeasurementSignificance?: number;
    rawEffectMeasurementSignificance?: number;
    reversePairsCount?: string;
    voteStatisticalSignificance?: number;
    aggregateQMScore?: number;
    forwardPearsonCorrelationCoefficient?: number;
    numberOfCorrelations?: number;
    vote?: number;
};
export type Correlation = {
    averageDailyHighCause?: number;
    averageDailyLowCause?: number;
    averageEffect?: number;
    averageEffectFollowingHighCause?: number;
    averageEffectFollowingLowCause?: number;
    averageForwardPearsonCorrelationOverOnsetDelays?: number;
    averageReversePearsonCorrelationOverOnsetDelays?: number;
    averageVote?: number;
    causeChanges?: number;
    causeDataSource?: DataSource;
    causeUserVariableShareUserMeasurements?: number;
    causeVariableCategoryId?: number;
    causeVariableCategoryName?: string;
    causeVariableCombinationOperation?: string;
    causeVariableUnitAbbreviatedName?: string;
    causeVariableId?: number;
    causeVariableMostCommonConnectorId?: number;
    causeVariableName: string;
    confidenceInterval?: number;
    confidenceLevel?: string;
    correlationCoefficient?: number;
    correlationIsContradictoryToOptimalValues?: boolean;
    createdAt?: string;
    criticalTValue?: number;
    direction?: string;
    durationOfAction?: number;
    durationOfActionInHours?: number;
    degreesOfFreedom?: number;
    effectNumberOfProcessedDailyMeasurements?: number;
    error?: string;
    effectChanges?: number;
    effectDataSource?: DataSource;
    effectSize?: string;
    effectUnit?: string;
    effectUserVariableShareUserMeasurements?: number;
    effectVariableCategoryId?: number;
    effectVariableCategoryName?: string;
    effectVariableCombinationOperation?: string;
    effectVariableCommonAlias?: string;
    effectVariableUnitAbbreviatedName?: string;
    effectVariableUnitId?: number;
    effectVariableUnitName?: string;
    effectVariableId?: number;
    effectVariableMostCommonConnectorId?: number;
    effectVariableName: string;
    experimentEndTime?: string;
    experimentStartTime?: string;
    forwardSpearmanCorrelationCoefficient?: number;
    numberOfPairs?: number;
    onsetDelay?: number;
    onsetDelayInHours?: number;
    onsetDelayWithStrongestPearsonCorrelation?: number;
    onsetDelayWithStrongestPearsonCorrelationInHours?: number;
    optimalPearsonProduct?: number;
    outcomeFillingValue?: number;
    outcomeMaximumAllowedValue?: number;
    outcomeMinimumAllowedValue?: number;
    pearsonCorrelationWithNoOnsetDelay?: number;
    predictivePearsonCorrelation?: number;
    predictivePearsonCorrelationCoefficient?: number;
    predictorDataSources?: string;
    predictorFillingValue?: number;
    predictorMaximumAllowedValue?: number;
    predictorMinimumAllowedValue?: number;
    predictsHighEffectChange?: number;
    predictsLowEffectChange?: number;
    pValue?: number;
    qmScore?: number;
    reversePearsonCorrelationCoefficient?: number;
    shareUserMeasurements?: boolean;
    sharingDescription?: string;
    sharingTitle?: string;
    significantDifference?: boolean;
    statisticalSignificance?: number;
    strengthLevel?: string;
    strongestPearsonCorrelationCoefficient?: number;
    studyHtml?: StudyHtml;
    studyImages?: StudyImages;
    studyLinks?: StudyLinks;
    studyText?: StudyText;
    tValue?: number;
    updatedAt?: string;
    userId?: number;
    userVote?: number;
    valuePredictingHighOutcome?: number;
    valuePredictingLowOutcome?: number;
    outcomeDataSources?: string;
    principalInvestigator?: string;
    reverseCorrelation?: number;
    averagePearsonCorrelationCoefficientOverOnsetDelays?: number;
    causeNumberOfRawMeasurements?: number;
    correlationsOverDurationsOfAction?: HyperParameterCorrelation[];
    correlationsOverOnsetDelays?: HyperParameterCorrelation[];
    correlationsOverDurationsOfActionChartConfig?: {};
    correlationsOverOnsetDelaysChartConfig?: {};
    numberOfUsers?: number;
    rawCauseMeasurementSignificance?: number;
    rawEffectMeasurementSignificance?: number;
    reversePairsCount?: string;
    voteStatisticalSignificance?: number;
    aggregateQMScore?: number;
    forwardPearsonCorrelationCoefficient?: number;
    numberOfCorrelations?: number;
    vote?: number;
};
export type DataSource = {
    affiliate: boolean;
    backgroundColor?: string;
    buttons?: Button[];
    card?: Card;
    clientId?: string;
    connected?: boolean;
    connectError?: string;
    connectInstructions?: ConnectInstructions;
    connectorId?: number;
    connectStatus?: string;
    count?: number;
    createdAt?: string;
    connectorClientId: string;
    defaultVariableCategoryName: string;
    displayName: string;
    enabled: number;
    getItUrl: string;
    id: number;
    image: string;
    imageHtml: string;
    lastSuccessfulUpdatedAt?: string;
    lastUpdate?: number;
    linkedDisplayNameHtml: string;
    longDescription: string;
    message?: string;
    mobileConnectMethod?: string;
    name: string;
    platforms?: string[];
    premium?: boolean;
    scopes?: string[];
    shortDescription: string;
    spreadsheetUploadLink?: string;
    totalMeasurementsInLastUpdate?: number;
    updatedAt?: string;
    updateRequestedAt?: string;
    updateStatus?: string;
    userId?: number;
};
export type DeviceToken = {
    clientId?: string;
    platform: string;
    deviceToken: string;
};
export type ErrorResponse = {
    message: string;
};
export type Explanation = {
    description: string;
    image: Image;
    ionIcon: string;
    startTracking: ExplanationStartTracking;
    title: string;
    html?: string;
};
export type ExplanationStartTracking = {
    button: Button;
    description: string;
    title: string;
};
export type InputField = {
    displayName: string;
    helpText?: string;
    hint?: string;
    icon?: string;
    id?: string;
    image?: string;
    key?: string;
    labelLeft?: string;
    labelRight?: string;
    link?: string;
    maxLength?: number;
    maxValue?: number;
    minLength?: number;
    minValue?: number;
    options?: string[];
    placeholder?: string;
    postUrl?: string;
    required?: boolean;
    show?: boolean;
    submitButton?: Button;
    type: "check_box" | "date" | "email" | "number" | "postal_code" | "select_option" | "string" | "switch" | "text_area" | "unit" | "variable_category";
    validationPattern?: string;
    value?: string;
};
export type GetConnectorsResponse = {
    connectors?: DataSource[];
    description: string;
    summary: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type GetCorrelationsDataResponse = {
    correlations: Correlation[];
    explanation: Explanation;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type GetUserVariableRelationshipsResponse = {
    data?: GetCorrelationsDataResponse;
    description: string;
    summary: string;
    avatar?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type GetStudiesResponse = {
    studies?: Study[];
    description: string;
    summary: string;
    image?: Image;
    avatar?: string;
    ionIcon?: string;
    startTracking?: ExplanationStartTracking;
    title?: string;
    html?: string;
};
export type GetSharesResponse = {
    authorizedClients?: AuthorizedClients;
    description: string;
    summary: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type FeedResponse = {
    cards: Card[];
    description: string;
    summary: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type GetTrackingReminderNotificationsResponse = {
    data?: TrackingReminderNotification[];
    description: string;
    summary: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type Image = {
    height: string;
    imageUrl: string;
    width: string;
};
export type JsonErrorResponse = {
    message?: string;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type Measurement = {
    card?: Card;
    clientId?: string;
    connectorId?: number;
    createdAt?: string;
    displayValueAndUnitString?: string;
    iconIcon?: string;
    id?: number;
    inputType?: string;
    ionIcon?: string;
    manualTracking?: boolean;
    maximumAllowedValue?: number;
    minimumAllowedValue?: number;
    note?: string;
    noteObject?: {};
    noteHtml?: {};
    originalUnitId?: number;
    originalValue?: number;
    pngPath?: string;
    pngUrl?: string;
    productUrl?: string;
    sourceName: string;
    startDate?: string;
    startAt: string;
    svgUrl?: string;
    unitAbbreviatedName: string;
    unitCategoryId?: number;
    unitCategoryName?: string;
    unitId?: number;
    unitName?: string;
    updatedAt?: string;
    url?: string;
    userVariableUnitAbbreviatedName?: string;
    userVariableUnitCategoryId?: number;
    userVariableUnitCategoryName?: string;
    userVariableUnitId?: number;
    userVariableUnitName?: string;
    userVariableVariableCategoryId?: number;
    userVariableVariableCategoryName?: string;
    valence?: string;
    value: number;
    variableCategoryId?: number;
    variableCategoryImageUrl?: string;
    variableCategoryName?: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableDescription?: string;
    variableId?: number;
    variableName: string;
    displayName?: string;
};
export type MeasurementItem = {
    startAt: string;
    value: number;
    variableCategoryName: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableName: string;
    unitAbbreviatedName: string;
    combinationOperation: "MEAN" | "SUM";
    sourceName?: string;
    upc?: string;
    note?: string;
};
export type MeasurementUpdate = {
    id: number;
    note?: string;
    startAt?: string;
    value?: number;
};
export type Pair = {
    causeMeasurement: number;
    causeMeasurementValue: number;
    causeVariableUnitAbbreviatedName: string;
    effectMeasurement: number;
    effectMeasurementValue: number;
    effectVariableUnitAbbreviatedName: string;
    eventAt?: string;
    eventAtUnixTime?: number;
    startAt?: string;
    timestamp: number;
};
export type ParticipantInstruction = {
    instructionsForCauseVariable?: string;
    instructionsForEffectVariable?: string;
};
export type PostMeasurementsDataResponse = {
    userVariables?: Variable[];
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostMeasurementsResponse = {
    data?: PostMeasurementsDataResponse;
    message?: string;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status: string;
    success: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostStudyPublishResponse = {
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostStudyCreateResponse = {
    study?: Study;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostTrackingRemindersDataResponse = {
    trackingReminderNotifications?: TrackingReminderNotification[];
    trackingReminders?: TrackingReminder[];
    userVariables?: Variable[];
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostTrackingRemindersResponse = {
    data?: PostTrackingRemindersDataResponse;
    message?: string;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status: string;
    success: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostUserSettingsDataResponse = {
    purchaseId?: number;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type PostUserSettingsResponse = {
    data?: PostUserSettingsDataResponse;
    message?: string;
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status: string;
    success: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type ShareInvitationBody = {
    emailAddress: string;
    name?: string;
    emailSubject?: string;
    emailBody?: string;
    scopes?: string;
};
export type Study = {
    type: string;
    userId?: number;
    id?: string;
    causeVariable?: Variable;
    causeVariableName?: string;
    studyCharts?: StudyCharts;
    effectVariable?: Variable;
    effectVariableName?: string;
    participantInstructions?: ParticipantInstruction;
    statistics?: Correlation;
    studyCard?: Card;
    studyHtml?: StudyHtml;
    studyImages?: StudyImages;
    studyLinks?: StudyLinks;
    studySharing?: StudySharing;
    studyText?: StudyText;
    studyVotes?: StudyVotes;
    joined?: boolean;
};
export type StudyCharts = {
    populationTraitScatterPlot?: Chart;
    outcomeDistributionColumnChart?: Chart;
    predictorDistributionColumnChart?: Chart;
    correlationScatterPlot?: Chart;
    pairsOverTimeLineChart?: Chart;
};
export type StudyCreationBody = {
    causeVariableName: string;
    effectVariableName: string;
    studyTitle?: string;
    type: "individual" | "group" | "global";
};
export type StudyHtml = {
    chartHtml: string;
    downloadButtonsHtml?: string;
    fullPageWithHead?: string;
    fullStudyHtml: string;
    fullStudyHtmlWithCssStyles?: string;
    participantInstructionsHtml?: string;
    statisticsTableHtml?: string;
    studyAbstractHtml?: string;
    studyHeaderHtml?: string;
    studyImageHtml?: string;
    studyMetaHtml?: string;
    studyTextHtml?: string;
    socialSharingButtonHtml?: string;
    studySummaryBoxHtml?: string;
};
export type StudyImages = {
    causeVariableImageUrl?: string;
    causeVariableIonIcon?: string;
    effectVariableImageUrl?: string;
    effectVariableIonIcon?: string;
    gaugeImage: string;
    gaugeImageSquare: string;
    gaugeSharingImageUrl?: string;
    imageUrl: string;
    robotSharingImageUrl?: string;
    avatar?: string;
};
export type StudyJoinResponse = {
    study?: Study;
    trackingReminders?: TrackingReminder[];
    trackingReminderNotifications?: TrackingReminderNotification[];
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    link?: string;
    card?: Card;
};
export type StudyLinks = {
    studyJoinLink?: string;
    studyLinkEmail: string;
    studyLinkFacebook: string;
    studyLinkGoogle: string;
    studyLinkStatic: string;
    studyLinkDynamic: string;
    studyLinkTwitter: string;
};
export type StudySharing = {
    shareUserMeasurements: boolean;
    sharingDescription: string;
    sharingTitle: string;
};
export type StudyText = {
    averageEffectFollowingHighCauseExplanation?: string;
    averageEffectFollowingLowCauseExplanation?: string;
    valuePredictingHighOutcomeExplanation?: string;
    valuePredictingLowOutcomeExplanation?: string;
    dataAnalysis?: string;
    dataSources?: string;
    dataSourcesParagraphForCause?: string;
    dataSourcesParagraphForEffect?: string;
    lastCauseDailyValueSentenceExtended?: string;
    lastCauseAndOptimalValueSentence?: string;
    lastCauseDailyValueSentence?: string;
    optimalDailyValueSentence?: string;
    participantInstructions?: string;
    predictorExplanation?: string;
    significanceExplanation?: string;
    studyAbstract: string;
    studyDesign: string;
    studyLimitations: string;
    studyObjective: string;
    studyResults: string;
    studyTitle: string;
    studyInvitation?: string;
    studyQuestion?: string;
    studyBackground?: string;
};
export type StudyVotes = {
    averageVote: number;
    userVote: number;
};
export type TrackingReminder = {
    actionArray?: TrackingReminderNotificationAction[];
    availableUnits?: Unit[];
    bestStudyLink?: string;
    bestStudyCard?: Card;
    bestUserStudyLink?: string;
    bestUserStudyCard?: Card;
    bestPopulationStudyLink?: string;
    bestPopulationStudyCard?: Card;
    optimalValueMessage?: string;
    commonOptimalValueMessage?: string;
    userOptimalValueMessage?: string;
    card?: Card;
    clientId?: string;
    combinationOperation?: "MEAN" | "SUM";
    createdAt?: string;
    displayName?: string;
    unitAbbreviatedName: string;
    unitCategoryId?: number;
    unitCategoryName?: string;
    unitId?: number;
    unitName?: string;
    defaultValue?: number;
    enabled?: boolean;
    email?: boolean;
    errorMessage?: string;
    fillingValue?: number;
    firstDailyReminderTime?: string;
    frequencyTextDescription?: string;
    frequencyTextDescriptionWithTime?: string;
    id?: number;
    inputType?: string;
    instructions?: string;
    ionIcon?: string;
    lastTracked?: string;
    lastValue?: number;
    latestTrackingReminderNotificationReminderTime?: string;
    localDailyReminderNotificationTimes?: string[];
    localDailyReminderNotificationTimesForAllReminders?: string[];
    manualTracking?: boolean;
    maximumAllowedValue?: number;
    minimumAllowedValue?: number;
    nextReminderTimeEpochSeconds?: number;
    notificationBar?: boolean;
    numberOfRawMeasurements?: number;
    numberOfUniqueValues?: number;
    outcome?: boolean;
    pngPath?: string;
    pngUrl?: string;
    productUrl?: string;
    popUp?: boolean;
    question?: string;
    longQuestion?: string;
    reminderEndTime?: string;
    reminderFrequency: number;
    reminderSound?: string;
    reminderStartEpochSeconds?: number;
    reminderStartTime?: string;
    reminderStartTimeLocal?: string;
    reminderStartTimeLocalHumanFormatted?: string;
    repeating?: boolean;
    secondDailyReminderTime?: string;
    secondToLastValue?: number;
    sms?: boolean;
    startTrackingDate?: string;
    stopTrackingDate?: string;
    svgUrl?: string;
    thirdDailyReminderTime?: string;
    thirdToLastValue?: number;
    trackingReminderId?: number;
    trackingReminderImageUrl?: string;
    upc?: string;
    updatedAt?: string;
    userId?: number;
    userVariableUnitAbbreviatedName?: string;
    userVariableUnitCategoryId?: number;
    userVariableUnitCategoryName?: string;
    userVariableUnitId?: number;
    userVariableUnitName?: string;
    userVariableVariableCategoryId?: number;
    userVariableVariableCategoryName?: string;
    valence?: string;
    valueAndFrequencyTextDescription?: string;
    valueAndFrequencyTextDescriptionWithTime?: string;
    variableCategoryId?: number;
    variableCategoryImageUrl?: string;
    variableCategoryName: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableDescription?: string;
    variableId?: number;
    variableName: string;
};
export type TrackingReminderNotification = {
    actionArray: TrackingReminderNotificationAction[];
    availableUnits: Unit[];
    bestStudyLink?: string;
    bestStudyCard?: Card;
    bestUserStudyLink?: string;
    bestUserStudyCard?: Card;
    bestPopulationStudyLink?: string;
    bestPopulationStudyCard?: Card;
    optimalValueMessage?: string;
    commonOptimalValueMessage?: string;
    userOptimalValueMessage?: string;
    card?: Card;
    clientId?: string;
    combinationOperation?: "MEAN" | "SUM";
    createdAt?: string;
    displayName?: string;
    modifiedValue?: number;
    unitAbbreviatedName?: string;
    unitCategoryId?: number;
    unitCategoryName?: string;
    unitId?: number;
    unitName?: string;
    defaultValue?: number;
    description?: string;
    email?: boolean;
    fillingValue: number;
    iconIcon?: string;
    id: number;
    imageUrl?: string;
    inputType?: string;
    ionIcon?: string;
    lastValue?: number;
    manualTracking?: boolean;
    maximumAllowedValue?: number;
    minimumAllowedValue?: number;
    mostCommonValue?: number;
    notificationBar?: boolean;
    notifiedAt?: string;
    numberOfUniqueValues?: number;
    outcome?: boolean;
    pngPath?: string;
    pngUrl?: string;
    popUp?: boolean;
    productUrl?: string;
    question?: string;
    longQuestion?: string;
    reminderEndTime?: string;
    reminderFrequency?: number;
    reminderSound?: string;
    reminderStartTime?: string;
    reminderTime?: string;
    secondMostCommonValue?: number;
    secondToLastValue?: number;
    sms?: boolean;
    svgUrl?: string;
    thirdMostCommonValue?: number;
    thirdToLastValue?: number;
    title?: string;
    total?: number;
    trackAllActions: TrackingReminderNotificationTrackAllAction[];
    trackingReminderId?: number;
    trackingReminderImageUrl?: string;
    trackingReminderNotificationId?: number;
    trackingReminderNotificationTime?: string;
    trackingReminderNotificationTimeEpoch?: number;
    trackingReminderNotificationTimeLocal?: string;
    trackingReminderNotificationTimeLocalHumanString?: string;
    updatedAt?: string;
    userId?: number;
    userVariableUnitAbbreviatedName?: string;
    userVariableUnitCategoryId?: number;
    userVariableUnitCategoryName?: string;
    userVariableUnitId?: number;
    userVariableUnitName?: string;
    userVariableVariableCategoryId?: number;
    userVariableVariableCategoryName?: string;
    valence?: string;
    variableCategoryId?: number;
    variableCategoryImageUrl?: string;
    variableCategoryName?: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableId?: number;
    variableImageUrl?: string;
    variableName?: string;
};
export type TrackingReminderNotificationAction = {
    action: string;
    callback: string;
    modifiedValue: number;
    title: string;
    longTitle?: string;
    shortTitle?: string;
};
export type TrackingReminderNotificationPost = {
    action: "skip" | "snooze" | "track";
    id: number;
    modifiedValue?: number;
};
export type TrackingReminderNotificationTrackAllAction = {
    action: string;
    callback: string;
    modifiedValue: number;
    title: string;
};
export type Unit = {
    abbreviatedName: string;
    advanced?: number;
    category: "Distance" | "Duration" | "Energy" | "Frequency" | "Miscellany" | "Pressure" | "Proportion" | "Rating" | "Temperature" | "Volume" | "Weight" | "Count";
    categoryId?: number;
    categoryName?: string;
    conversionSteps: ConversionStep[];
    id?: number;
    image?: string;
    manualTracking?: number;
    maximumAllowedValue?: number;
    maximumValue: number;
    minimumAllowedValue?: number;
    minimumValue?: number;
    name: string;
    unitCategory: UnitCategory;
};
export type UnitCategory = {
    id?: number;
    name: string;
    standardUnitAbbreviatedName?: string;
};
export type User = {
    accessToken: string;
    accessTokenExpires?: string;
    accessTokenExpiresAtMilliseconds?: number;
    administrator: boolean;
    avatar?: string;
    avatarImage?: string;
    capabilities?: string;
    card?: Card;
    clientId?: string;
    clientUserId?: string;
    combineNotifications?: boolean;
    createdAt?: string;
    description?: string;
    displayName: string;
    earliestReminderTime?: string;
    email: string;
    firstName?: string;
    getPreviewBuilds?: boolean;
    hasAndroidApp?: boolean;
    hasChromeExtension?: boolean;
    hasIosApp?: boolean;
    id: number;
    lastActive?: string;
    lastFour?: string;
    lastName?: string;
    lastSmsTrackingReminderNotificationId?: string;
    latestReminderTime?: string;
    loginName: string;
    password?: string;
    phoneNumber?: string;
    phoneVerificationCode?: string;
    primaryOutcomeVariableId?: number;
    primaryOutcomeVariableName?: string;
    pushNotificationsEnabled?: boolean;
    refreshToken?: string;
    roles?: string;
    sendPredictorEmails?: boolean;
    sendReminderNotificationEmails?: boolean;
    shareAllData?: boolean;
    smsNotificationsEnabled?: boolean;
    stripeActive?: boolean;
    stripeId?: string;
    stripePlan?: string;
    stripeSubscription?: string;
    subscriptionEndsAt?: string;
    subscriptionProvider?: string;
    timeZoneOffset?: number;
    trackLocation?: boolean;
    updatedAt?: string;
    userRegistered?: string;
    userUrl?: string;
};
export type UserPostBody = {
    clientUserId?: string;
    combineNotifications?: boolean;
    description?: string;
    displayName?: string;
    earliestReminderTime?: string;
    email?: string;
    firstName?: string;
    getPreviewBuilds?: boolean;
    hasAndroidApp?: boolean;
    hasChromeExtension?: boolean;
    hasIosApp?: boolean;
    lastActive?: string;
    lastName?: string;
    latestReminderTime?: string;
    loginName?: string;
    password?: string;
    phoneNumber?: string;
    phoneVerificationCode?: string;
    primaryOutcomeVariableId?: number;
    primaryOutcomeVariableName?: string;
    pushNotificationsEnabled?: boolean;
    sendPredictorEmails?: boolean;
    sendReminderNotificationEmails?: boolean;
    shareAllData?: boolean;
    smsNotificationsEnabled?: boolean;
    timeZoneOffset?: number;
    trackLocation?: boolean;
    userUrl?: string;
};
export type UsersResponse = {
    users: User[];
    description?: string;
    summary?: string;
    errors?: ErrorResponse[];
    status?: string;
    success?: boolean;
    code?: number;
    image?: Image;
    avatar?: string;
    ionIcon?: string;
    html?: string;
    link?: string;
    card?: Card;
};
export type UserTag = {
    conversionFactor: number;
    taggedVariableId: number;
    tagVariableId: number;
};
export type TagVariable = {
    actionArray?: TrackingReminderNotificationAction[];
    alias?: string;
    availableUnits?: Unit[];
    bestStudyLink?: string;
    bestStudyCard?: Card;
    bestUserStudyLink?: string;
    bestUserStudyCard?: Card;
    bestPopulationStudyLink?: string;
    bestPopulationStudyCard?: Card;
    optimalValueMessage?: string;
    commonOptimalValueMessage?: string;
    userOptimalValueMessage?: string;
    card?: Card;
    causeOnly?: boolean;
    charts?: VariableCharts;
    chartsLinkDynamic?: string;
    chartsLinkEmail?: string;
    chartsLinkFacebook?: string;
    chartsLinkGoogle?: string;
    chartsLinkStatic?: string;
    chartsLinkTwitter?: string;
    clientId?: string;
    combinationOperation?: "MEAN" | "SUM";
    commonAlias?: string;
    createdAt?: string;
    dataSourceNames?: string;
    dataSources?: DataSource[];
    description?: string;
    displayName?: string;
    durationOfAction?: number;
    durationOfActionInHours?: number;
    earliestFillingTime?: number;
    earliestMeasurementTime?: number;
    earliestSourceTime?: number;
    errorMessage?: string;
    experimentEndTime?: string;
    experimentStartTime?: string;
    fillingType?: "none" | "zero-filling" | "value-filling";
    fillingValue?: number;
    iconIcon?: string;
    id: number;
    imageUrl?: string;
    informationalUrl?: string;
    inputType?: string;
    ionIcon?: string;
    joinWith?: number;
    kurtosis?: number;
    lastProcessedDailyValue?: number;
    lastSuccessfulUpdateTime?: string;
    lastValue?: number;
    latestFillingTime?: number;
    latestMeasurementTime?: number;
    latestSourceTime?: number;
    latestUserMeasurementTime?: number;
    latitude?: number;
    location?: string;
    longitude?: number;
    manualTracking?: boolean;
    maximumAllowedDailyValue?: number;
    maximumAllowedValue?: number;
    maximumRecordedDailyValue?: number;
    maximumRecordedValue?: number;
    mean?: number;
    measurementsAtLastAnalysis?: number;
    median?: number;
    minimumAllowedValue?: number;
    minimumAllowedDailyValue?: number;
    minimumNonZeroValue?: number;
    minimumRecordedValue?: number;
    mostCommonConnectorId?: number;
    mostCommonOriginalUnitId?: number;
    mostCommonUnitId?: number;
    mostCommonValue?: number;
    name: string;
    numberOfGlobalVariableRelationshipsAsCause?: number;
    numberOfGlobalVariableRelationshipsAsEffect?: number;
    numberOfChanges?: number;
    numberOfCorrelations?: number;
    numberOfCorrelationsAsCause?: number;
    numberOfCorrelationsAsEffect?: number;
    numberOfProcessedDailyMeasurements?: number;
    numberOfRawMeasurements?: number;
    numberOfTrackingReminders?: number;
    numberOfUniqueDailyValues?: number;
    numberOfUniqueValues?: number;
    numberOfUserVariableRelationshipsAsCause?: number;
    numberOfUserVariableRelationshipsAsEffect?: number;
    numberOfUserVariables?: number;
    onsetDelay?: number;
    onsetDelayInHours?: number;
    outcome?: boolean;
    outcomeOfInterest?: boolean;
    pngPath?: string;
    pngUrl?: string;
    predictorOfInterest?: number;
    price?: number;
    productUrl?: string;
    public?: boolean;
    question?: string;
    longQuestion?: string;
    rawMeasurementsAtLastAnalysis?: number;
    secondMostCommonValue?: number;
    secondToLastValue?: number;
    shareUserMeasurements?: boolean;
    skewness?: number;
    standardDeviation?: number;
    status?: string;
    subtitle?: string;
    svgUrl?: string;
    thirdMostCommonValue?: number;
    thirdToLastValue?: number;
    trackingInstructions?: string;
    trackingInstructionsCard?: Card;
    unit?: Unit;
    unitAbbreviatedName?: string;
    unitCategoryId?: number;
    unitCategoryName?: string;
    unitId?: number;
    unitName?: string;
    upc?: string;
    updated?: number;
    updatedAt?: string;
    updatedTime?: string;
    userId: number;
    userVariableUnitAbbreviatedName?: string;
    userVariableUnitCategoryId?: number;
    userVariableUnitCategoryName?: string;
    userVariableUnitId?: number;
    userVariableUnitName?: string;
    valence?: string;
    variableCategoryId?: number;
    variableCategoryName?: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableId: number;
    variableName?: string;
    variance?: number;
    wikipediaTitle?: string;
};
export type Variable = {
    actionArray?: TrackingReminderNotificationAction[];
    alias?: string;
    availableUnits?: Unit[];
    bestStudyLink?: string;
    bestStudyCard?: Card;
    bestUserStudyLink?: string;
    bestUserStudyCard?: Card;
    bestPopulationStudyLink?: string;
    bestPopulationStudyCard?: Card;
    optimalValueMessage?: string;
    commonOptimalValueMessage?: string;
    userOptimalValueMessage?: string;
    card?: Card;
    causeOnly?: boolean;
    charts?: VariableCharts;
    chartsLinkDynamic?: string;
    chartsLinkEmail?: string;
    chartsLinkFacebook?: string;
    chartsLinkGoogle?: string;
    chartsLinkStatic?: string;
    chartsLinkTwitter?: string;
    childCommonTagVariables?: TagVariable[];
    childUserTagVariables?: TagVariable[];
    clientId?: string;
    combinationOperation?: "MEAN" | "SUM";
    commonAlias?: string;
    commonTaggedVariables?: TagVariable[];
    commonTagVariables?: TagVariable[];
    createdAt?: string;
    dataSourceNames?: string;
    dataSources?: DataSource[];
    description?: string;
    displayName?: string;
    durationOfAction?: number;
    durationOfActionInHours?: number;
    earliestFillingTime?: number;
    earliestMeasurementTime?: number;
    earliestSourceTime?: number;
    errorMessage?: string;
    experimentEndTime?: string;
    experimentStartTime?: string;
    fillingType?: "none" | "zero-filling" | "value-filling";
    fillingValue?: number;
    iconIcon?: string;
    id: number;
    imageUrl?: string;
    informationalUrl?: string;
    ingredientOfCommonTagVariables?: TagVariable[];
    ingredientCommonTagVariables?: TagVariable[];
    ingredientOfUserTagVariables?: TagVariable[];
    ingredientUserTagVariables?: TagVariable[];
    inputType?: string;
    ionIcon?: string;
    joinedCommonTagVariables?: TagVariable[];
    joinedUserTagVariables?: TagVariable[];
    joinWith?: number;
    kurtosis?: number;
    lastProcessedDailyValue?: number;
    lastSuccessfulUpdateTime?: string;
    lastValue?: number;
    latestFillingTime?: number;
    latestMeasurementTime?: number;
    latestSourceTime?: number;
    latestUserMeasurementTime?: number;
    latitude?: number;
    location?: string;
    longitude?: number;
    manualTracking?: boolean;
    maximumAllowedDailyValue?: number;
    maximumAllowedValue?: number;
    maximumRecordedDailyValue?: number;
    maximumRecordedValue?: number;
    mean?: number;
    measurementsAtLastAnalysis?: number;
    median?: number;
    minimumAllowedValue?: number;
    minimumAllowedDailyValue?: number;
    minimumNonZeroValue?: number;
    minimumRecordedValue?: number;
    mostCommonConnectorId?: number;
    mostCommonOriginalUnitId?: number;
    mostCommonUnitId?: number;
    mostCommonValue?: number;
    name: string;
    numberOfGlobalVariableRelationshipsAsCause?: number;
    numberOfGlobalVariableRelationshipsAsEffect?: number;
    numberOfChanges?: number;
    numberOfCorrelations?: number;
    numberOfCorrelationsAsCause?: number;
    numberOfCorrelationsAsEffect?: number;
    numberOfProcessedDailyMeasurements?: number;
    numberOfRawMeasurements?: number;
    numberOfTrackingReminders?: number;
    numberOfUniqueDailyValues?: number;
    numberOfUniqueValues?: number;
    numberOfUserVariableRelationshipsAsCause?: number;
    numberOfUserVariableRelationshipsAsEffect?: number;
    numberOfUserVariables?: number;
    onsetDelay?: number;
    onsetDelayInHours?: number;
    outcome?: boolean;
    outcomeOfInterest?: boolean;
    parentCommonTagVariables?: TagVariable[];
    parentUserTagVariables?: TagVariable[];
    pngPath?: string;
    pngUrl?: string;
    predictorOfInterest?: number;
    price?: number;
    productUrl?: string;
    public?: boolean;
    question?: string;
    longQuestion?: string;
    rawMeasurementsAtLastAnalysis?: number;
    secondMostCommonValue?: number;
    secondToLastValue?: number;
    shareUserMeasurements?: boolean;
    skewness?: number;
    standardDeviation?: number;
    status?: string;
    subtitle?: string;
    svgUrl?: string;
    thirdMostCommonValue?: number;
    thirdToLastValue?: number;
    trackingInstructions?: string;
    trackingInstructionsCard?: Card;
    unit?: Unit;
    unitAbbreviatedName?: string;
    unitCategoryId?: number;
    unitCategoryName?: string;
    unitId?: number;
    unitName?: string;
    upc?: string;
    updated?: number;
    updatedAt?: string;
    updatedTime?: string;
    userId: number;
    userTaggedVariables?: TagVariable[];
    userTagVariables?: TagVariable[];
    userVariableUnitAbbreviatedName?: string;
    userVariableUnitCategoryId?: number;
    userVariableUnitCategoryName?: string;
    userVariableUnitId?: number;
    userVariableUnitName?: string;
    variableCategory?: VariableCategory;
    joinedVariables?: TagVariable[];
    valence?: string;
    variableCategoryId?: number;
    variableCategoryName?: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableId: number;
    variableName?: string;
    variance?: number;
    wikipediaTitle?: string;
};
export type UserVariableDelete = {
    variableId: number;
};
export type VariableCategory = {
    appType?: string;
    causeOnly?: boolean;
    combinationOperation?: string;
    createdTime?: string;
    unitAbbreviatedName?: string;
    unitId?: number;
    durationOfAction?: number;
    fillingValue?: number;
    helpText?: string;
    id?: number;
    imageUrl?: string;
    ionIcon?: string;
    manualTracking?: boolean;
    maximumAllowedValue?: string;
    measurementSynonymSingularLowercase?: string;
    minimumAllowedValue?: string;
    moreInfo?: string;
    name: string;
    onsetDelay?: number;
    outcome?: boolean;
    pngPath?: string;
    pngUrl?: string;
    public?: boolean;
    svgPath?: string;
    svgUrl?: string;
    updated?: number;
    updatedTime?: string;
    variableCategoryName?: "Activity" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Goals" | "Locations" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activities" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs";
    variableCategoryNameSingular?: string;
};
export type VariableCharts = {
    hourlyColumnChart?: Chart;
    monthlyColumnChart?: Chart;
    distributionColumnChart?: Chart;
    weekdayColumnChart?: Chart;
    lineChartWithoutSmoothing?: Chart;
    lineChartWithSmoothing?: Chart;
};
export type Vote = {
    causeVariableId: number;
    clientId: string;
    createdAt?: string;
    effectVariableId: number;
    id?: number;
    updatedAt?: string;
    userId: number;
    value: "up" | "down" | "none";
    type?: "causality" | "usefulness";
};
export type AxiosConfig = {
    paramsSerializer?: AxiosRequestConfig["paramsSerializer"];
};
export type Config = {
    mutations?: MutationConfigs;
    axios?: AxiosConfig;
};
export function initialize(axios: AxiosInstance, config?: Config) {
    const requests = makeRequests(axios, config?.axios);
    return {
        requests,
        queries: makeQueries(requests),
        mutations: makeMutations(requests, config?.mutations)
    };
}
function useRapiniMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationFn: MutationFunction<TData, TVariables>, config?: (queryClient: QueryClient) => Pick<UseMutationOptions<TData, TError, TVariables, TContext>, "onSuccess" | "onSettled" | "onError">, options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, "mutationFn">): UseMutationResult<TData, TError, TVariables, TContext> {
    const { onSuccess, onError, onSettled, ...rest } = options ?? {};
    const queryClient = useQueryClient();
    const conf = config?.(queryClient);
    const mutationOptions: typeof options = {
        onSuccess: (data: TData, variables: TVariables, context?: TContext) => {
            conf?.onSuccess?.(data, variables, context);
            onSuccess?.(data, variables, context);
        },
        onError: (error: TError, variables: TVariables, context?: TContext) => {
            conf?.onError?.(error, variables, context);
            onError?.(error, variables, context);
        },
        onSettled: (data: TData | undefined, error: TError | null, variables: TVariables, context?: TContext) => {
            conf?.onSettled?.(data, error, variables, context);
            onSettled?.(data, error, variables, context);
        },
        ...rest
    };
    return useMutation({ mutationFn, ...mutationOptions });
}
function nullIfUndefined<T>(value: T): NonNullable<T> | null {
    return typeof value === "undefined" ? null : value as NonNullable<T> | null;
}
export const queryKeys = {
    getUnits: () => ["getUnits"] as const,
    getVariables: (includeCharts?: boolean, numberOfRawMeasurements?: string, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", name?: string, variableName?: string, updatedAt?: string, sourceName?: string, earliestMeasurementTime?: string, latestMeasurementTime?: string, id?: number, lastSourceName?: string, limit?: number, offset?: number, sort?: string, includePublic?: boolean, manualTracking?: boolean, clientId?: string, upc?: string, effectOrCause?: string, publicEffectOrCause?: string, exactMatch?: boolean, variableCategoryId?: number, includePrivate?: boolean, searchPhrase?: string, synonyms?: string, taggedVariableId?: number, tagVariableId?: number, joinVariableId?: number, parentUserTagVariableId?: number, childUserTagVariableId?: number, ingredientUserTagVariableId?: number, ingredientOfUserTagVariableId?: number, commonOnly?: boolean, userOnly?: boolean, includeTags?: boolean, recalculate?: boolean, variableId?: number, concise?: boolean, refresh?: boolean) => ["getVariables", nullIfUndefined(includeCharts), nullIfUndefined(numberOfRawMeasurements), nullIfUndefined(variableCategoryName), nullIfUndefined(name), nullIfUndefined(variableName), nullIfUndefined(updatedAt), nullIfUndefined(sourceName), nullIfUndefined(earliestMeasurementTime), nullIfUndefined(latestMeasurementTime), nullIfUndefined(id), nullIfUndefined(lastSourceName), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(sort), nullIfUndefined(includePublic), nullIfUndefined(manualTracking), nullIfUndefined(clientId), nullIfUndefined(upc), nullIfUndefined(effectOrCause), nullIfUndefined(publicEffectOrCause), nullIfUndefined(exactMatch), nullIfUndefined(variableCategoryId), nullIfUndefined(includePrivate), nullIfUndefined(searchPhrase), nullIfUndefined(synonyms), nullIfUndefined(taggedVariableId), nullIfUndefined(tagVariableId), nullIfUndefined(joinVariableId), nullIfUndefined(parentUserTagVariableId), nullIfUndefined(childUserTagVariableId), nullIfUndefined(ingredientUserTagVariableId), nullIfUndefined(ingredientOfUserTagVariableId), nullIfUndefined(commonOnly), nullIfUndefined(userOnly), nullIfUndefined(includeTags), nullIfUndefined(recalculate), nullIfUndefined(variableId), nullIfUndefined(concise), nullIfUndefined(refresh)] as const,
    getMeasurements: (variableName?: string, sort?: string, limit?: number, offset?: number, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", updatedAt?: string, sourceName?: string, connectorName?: string, value?: string, unitName?: "% Recommended Daily Allowance" | "-4 to 4 Rating" | "0 to 1 Rating" | "0 to 5 Rating" | "1 to 10 Rating" | "1 to 5 Rating" | "Applications" | "Beats per Minute" | "Calories" | "Capsules" | "Centimeters" | "Count" | "Degrees Celsius" | "Degrees East" | "Degrees Fahrenheit" | "Degrees North" | "Dollars" | "Drops" | "Event" | "Feet" | "Grams" | "Hours" | "Inches" | "Index" | "Kilocalories" | "Kilograms" | "Kilometers" | "Liters" | "Meters" | "Micrograms" | "Micrograms per decilitre" | "Miles" | "Milligrams" | "Milliliters" | "Millimeters" | "Millimeters Merc" | "Milliseconds" | "Minutes" | "Pascal" | "Percent" | "Pieces" | "Pills" | "Pounds" | "Puffs" | "Seconds" | "Serving" | "Sprays" | "Tablets" | "Torr" | "Units" | "Yes/No" | "per Minute" | "Doses" | "Quarts" | "Ounces" | "International Units" | "Meters per Second", earliestMeasurementTime?: string, latestMeasurementTime?: string, createdAt?: string, id?: number, groupingWidth?: number, groupingTimezone?: string, doNotProcess?: boolean, clientId?: string, doNotConvert?: boolean, minMaxFilter?: boolean) => ["getMeasurements", nullIfUndefined(variableName), nullIfUndefined(sort), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(variableCategoryName), nullIfUndefined(updatedAt), nullIfUndefined(sourceName), nullIfUndefined(connectorName), nullIfUndefined(value), nullIfUndefined(unitName), nullIfUndefined(earliestMeasurementTime), nullIfUndefined(latestMeasurementTime), nullIfUndefined(createdAt), nullIfUndefined(id), nullIfUndefined(groupingWidth), nullIfUndefined(groupingTimezone), nullIfUndefined(doNotProcess), nullIfUndefined(clientId), nullIfUndefined(doNotConvert), nullIfUndefined(minMaxFilter)] as const,
    getAppSettings: (clientId?: string, client_secret?: string) => ["getAppSettings", nullIfUndefined(clientId), nullIfUndefined(client_secret)] as const,
    getMobileConnectPage: () => ["getMobileConnectPage"] as const,
    getConnectors: (clientId?: string) => ["getConnectors", nullIfUndefined(clientId)] as const,
    connectConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail") => ["connectConnector", connectorName] as const,
    disconnectConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail") => ["disconnectConnector", connectorName] as const,
    updateConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail") => ["updateConnector", connectorName] as const,
    getUserVariableRelationships: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string, commonOnly?: boolean) => ["getUserVariableRelationships", nullIfUndefined(causeVariableName), nullIfUndefined(effectVariableName), nullIfUndefined(sort), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(correlationCoefficient), nullIfUndefined(updatedAt), nullIfUndefined(outcomesOfInterest), nullIfUndefined(clientId), nullIfUndefined(commonOnly)] as const,
    getFeed: (sort?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, clientId?: string) => ["getFeed", nullIfUndefined(sort), nullIfUndefined(createdAt), nullIfUndefined(updatedAt), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(clientId)] as const,
    getIntegrationJs: (clientId?: string) => ["getIntegrationJs", nullIfUndefined(clientId)] as const,
    getNotificationPreferences: () => ["getNotificationPreferences"] as const,
    getOauthAuthorizationCode: (response_type: string, scope: string, clientId?: string, client_secret?: string, redirect_uri?: string, state?: string) => ["getOauthAuthorizationCode", response_type, scope, nullIfUndefined(clientId), nullIfUndefined(client_secret), nullIfUndefined(redirect_uri), nullIfUndefined(state)] as const,
    getAccessToken: (grant_type: string, code: string, response_type: string, scope: string, clientId?: string, client_secret?: string, redirect_uri?: string, state?: string) => ["getAccessToken", grant_type, code, response_type, scope, nullIfUndefined(clientId), nullIfUndefined(client_secret), nullIfUndefined(redirect_uri), nullIfUndefined(state)] as const,
    getShares: (createdAt?: string, updatedAt?: string, clientId?: string, appVersion?: string, log?: string, pwd?: string) => ["getShares", nullIfUndefined(createdAt), nullIfUndefined(updatedAt), nullIfUndefined(clientId), nullIfUndefined(appVersion), nullIfUndefined(log), nullIfUndefined(pwd)] as const,
    getStudies: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, principalInvestigatorUserId?: number, open?: boolean, joined?: boolean, created?: boolean, aggregated?: boolean, downvoted?: boolean) => ["getStudies", nullIfUndefined(causeVariableName), nullIfUndefined(effectVariableName), nullIfUndefined(clientId), nullIfUndefined(includeCharts), nullIfUndefined(recalculate), nullIfUndefined(studyId), nullIfUndefined(sort), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(correlationCoefficient), nullIfUndefined(updatedAt), nullIfUndefined(outcomesOfInterest), nullIfUndefined(principalInvestigatorUserId), nullIfUndefined(open), nullIfUndefined(joined), nullIfUndefined(created), nullIfUndefined(aggregated), nullIfUndefined(downvoted)] as const,
    getOpenStudies: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string) => ["getOpenStudies", nullIfUndefined(causeVariableName), nullIfUndefined(effectVariableName), nullIfUndefined(clientId), nullIfUndefined(includeCharts), nullIfUndefined(recalculate), nullIfUndefined(studyId)] as const,
    getStudiesJoined: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string) => ["getStudiesJoined", nullIfUndefined(causeVariableName), nullIfUndefined(effectVariableName), nullIfUndefined(sort), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(correlationCoefficient), nullIfUndefined(updatedAt), nullIfUndefined(outcomesOfInterest), nullIfUndefined(clientId)] as const,
    getStudiesCreated: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, updatedAt?: string, clientId?: string) => ["getStudiesCreated", nullIfUndefined(causeVariableName), nullIfUndefined(effectVariableName), nullIfUndefined(sort), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(updatedAt), nullIfUndefined(clientId)] as const,
    getTrackingReminderNotifications: (sort?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", reminderTime?: string, clientId?: string, onlyPast?: boolean, includeDeleted?: boolean) => ["getTrackingReminderNotifications", nullIfUndefined(sort), nullIfUndefined(createdAt), nullIfUndefined(updatedAt), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(variableCategoryName), nullIfUndefined(reminderTime), nullIfUndefined(clientId), nullIfUndefined(onlyPast), nullIfUndefined(includeDeleted)] as const,
    getTrackingReminders: (variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string) => ["getTrackingReminders", nullIfUndefined(variableCategoryName), nullIfUndefined(createdAt), nullIfUndefined(updatedAt), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(sort), nullIfUndefined(clientId), nullIfUndefined(appVersion)] as const,
    getUnitCategories: () => ["getUnitCategories"] as const,
    getUser: (createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, clientUserId?: number, log?: string, pwd?: string, includeAuthorizedClients?: boolean) => ["getUser", nullIfUndefined(createdAt), nullIfUndefined(updatedAt), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(sort), nullIfUndefined(clientId), nullIfUndefined(appVersion), nullIfUndefined(clientUserId), nullIfUndefined(log), nullIfUndefined(pwd), nullIfUndefined(includeAuthorizedClients)] as const,
    getUsers: (createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, clientUserId?: number, log?: string, pwd?: string) => ["getUsers", nullIfUndefined(createdAt), nullIfUndefined(updatedAt), nullIfUndefined(limit), nullIfUndefined(offset), nullIfUndefined(sort), nullIfUndefined(clientId), nullIfUndefined(appVersion), nullIfUndefined(clientUserId), nullIfUndefined(log), nullIfUndefined(pwd)] as const,
    getVariableCategories: () => ["getVariableCategories"] as const,
    getStudy: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string) => ["getStudy", nullIfUndefined(causeVariableName), nullIfUndefined(effectVariableName), nullIfUndefined(clientId), nullIfUndefined(includeCharts), nullIfUndefined(recalculate), nullIfUndefined(studyId)] as const
} as const;
export type QueryKeys = typeof queryKeys;
function makeRequests(axios: AxiosInstance, config?: AxiosConfig) {
    return {
        getUnits: () => axios.request<Unit[]>({
            method: "get",
            url: `/v3/units`
        }).then(res => res.data),
        getVariables: (includeCharts?: boolean, numberOfRawMeasurements?: string, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", name?: string, variableName?: string, updatedAt?: string, sourceName?: string, earliestMeasurementTime?: string, latestMeasurementTime?: string, id?: number, lastSourceName?: string, limit?: number, offset?: number, sort?: string, includePublic?: boolean, manualTracking?: boolean, clientId?: string, upc?: string, effectOrCause?: string, publicEffectOrCause?: string, exactMatch?: boolean, variableCategoryId?: number, includePrivate?: boolean, searchPhrase?: string, synonyms?: string, taggedVariableId?: number, tagVariableId?: number, joinVariableId?: number, parentUserTagVariableId?: number, childUserTagVariableId?: number, ingredientUserTagVariableId?: number, ingredientOfUserTagVariableId?: number, commonOnly?: boolean, userOnly?: boolean, includeTags?: boolean, recalculate?: boolean, variableId?: number, concise?: boolean, refresh?: boolean) => axios.request<Variable[]>({
            method: "get",
            url: `/v3/variables`,
            params: {
                ...(includeCharts !== undefined ? { includeCharts } : undefined),
                ...(numberOfRawMeasurements !== undefined ? { numberOfRawMeasurements } : undefined),
                ...(variableCategoryName !== undefined ? { variableCategoryName } : undefined),
                ...(name !== undefined ? { name } : undefined),
                ...(variableName !== undefined ? { variableName } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(sourceName !== undefined ? { sourceName } : undefined),
                ...(earliestMeasurementTime !== undefined ? { earliestMeasurementTime } : undefined),
                ...(latestMeasurementTime !== undefined ? { latestMeasurementTime } : undefined),
                ...(id !== undefined ? { id } : undefined),
                ...(lastSourceName !== undefined ? { lastSourceName } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(includePublic !== undefined ? { includePublic } : undefined),
                ...(manualTracking !== undefined ? { manualTracking } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(upc !== undefined ? { upc } : undefined),
                ...(effectOrCause !== undefined ? { effectOrCause } : undefined),
                ...(publicEffectOrCause !== undefined ? { publicEffectOrCause } : undefined),
                ...(exactMatch !== undefined ? { exactMatch } : undefined),
                ...(variableCategoryId !== undefined ? { variableCategoryId } : undefined),
                ...(includePrivate !== undefined ? { includePrivate } : undefined),
                ...(searchPhrase !== undefined ? { searchPhrase } : undefined),
                ...(synonyms !== undefined ? { synonyms } : undefined),
                ...(taggedVariableId !== undefined ? { taggedVariableId } : undefined),
                ...(tagVariableId !== undefined ? { tagVariableId } : undefined),
                ...(joinVariableId !== undefined ? { joinVariableId } : undefined),
                ...(parentUserTagVariableId !== undefined ? { parentUserTagVariableId } : undefined),
                ...(childUserTagVariableId !== undefined ? { childUserTagVariableId } : undefined),
                ...(ingredientUserTagVariableId !== undefined ? { ingredientUserTagVariableId } : undefined),
                ...(ingredientOfUserTagVariableId !== undefined ? { ingredientOfUserTagVariableId } : undefined),
                ...(commonOnly !== undefined ? { commonOnly } : undefined),
                ...(userOnly !== undefined ? { userOnly } : undefined),
                ...(includeTags !== undefined ? { includeTags } : undefined),
                ...(recalculate !== undefined ? { recalculate } : undefined),
                ...(variableId !== undefined ? { variableId } : undefined),
                ...(concise !== undefined ? { concise } : undefined),
                ...(refresh !== undefined ? { refresh } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postUserVariables: (payload: Variable[], includePrivate?: boolean, clientId?: string, includePublic?: boolean, searchPhrase?: string, exactMatch?: boolean, manualTracking?: boolean, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", variableCategoryId?: number, synonyms?: string) => axios.request<CommonResponse>({
            method: "post",
            url: `/v3/variables`,
            params: {
                ...(includePrivate !== undefined ? { includePrivate } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(includePublic !== undefined ? { includePublic } : undefined),
                ...(searchPhrase !== undefined ? { searchPhrase } : undefined),
                ...(exactMatch !== undefined ? { exactMatch } : undefined),
                ...(manualTracking !== undefined ? { manualTracking } : undefined),
                ...(variableCategoryName !== undefined ? { variableCategoryName } : undefined),
                ...(variableCategoryId !== undefined ? { variableCategoryId } : undefined),
                ...(synonyms !== undefined ? { synonyms } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getMeasurements: (variableName?: string, sort?: string, limit?: number, offset?: number, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", updatedAt?: string, sourceName?: string, connectorName?: string, value?: string, unitName?: "% Recommended Daily Allowance" | "-4 to 4 Rating" | "0 to 1 Rating" | "0 to 5 Rating" | "1 to 10 Rating" | "1 to 5 Rating" | "Applications" | "Beats per Minute" | "Calories" | "Capsules" | "Centimeters" | "Count" | "Degrees Celsius" | "Degrees East" | "Degrees Fahrenheit" | "Degrees North" | "Dollars" | "Drops" | "Event" | "Feet" | "Grams" | "Hours" | "Inches" | "Index" | "Kilocalories" | "Kilograms" | "Kilometers" | "Liters" | "Meters" | "Micrograms" | "Micrograms per decilitre" | "Miles" | "Milligrams" | "Milliliters" | "Millimeters" | "Millimeters Merc" | "Milliseconds" | "Minutes" | "Pascal" | "Percent" | "Pieces" | "Pills" | "Pounds" | "Puffs" | "Seconds" | "Serving" | "Sprays" | "Tablets" | "Torr" | "Units" | "Yes/No" | "per Minute" | "Doses" | "Quarts" | "Ounces" | "International Units" | "Meters per Second", earliestMeasurementTime?: string, latestMeasurementTime?: string, createdAt?: string, id?: number, groupingWidth?: number, groupingTimezone?: string, doNotProcess?: boolean, clientId?: string, doNotConvert?: boolean, minMaxFilter?: boolean) => axios.request<Measurement[]>({
            method: "get",
            url: `/v3/measurements`,
            params: {
                ...(variableName !== undefined ? { variableName } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(variableCategoryName !== undefined ? { variableCategoryName } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(sourceName !== undefined ? { sourceName } : undefined),
                ...(connectorName !== undefined ? { connectorName } : undefined),
                ...(value !== undefined ? { value } : undefined),
                ...(unitName !== undefined ? { unitName } : undefined),
                ...(earliestMeasurementTime !== undefined ? { earliestMeasurementTime } : undefined),
                ...(latestMeasurementTime !== undefined ? { latestMeasurementTime } : undefined),
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(id !== undefined ? { id } : undefined),
                ...(groupingWidth !== undefined ? { groupingWidth } : undefined),
                ...(groupingTimezone !== undefined ? { groupingTimezone } : undefined),
                ...(doNotProcess !== undefined ? { doNotProcess } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(doNotConvert !== undefined ? { doNotConvert } : undefined),
                ...(minMaxFilter !== undefined ? { minMaxFilter } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postMeasurements: (payload: MeasurementItem[]) => axios.request<PostMeasurementsResponse>({
            method: "post",
            url: `/v3/measurements/post`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        updateMeasurement: (payload: MeasurementUpdate) => axios.request<CommonResponse>({
            method: "post",
            url: `/v3/measurements/update`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        deleteMeasurement: () => axios.request<CommonResponse>({
            method: "delete",
            url: `/v3/measurements/delete`
        }).then(res => res.data),
        getAppSettings: (clientId?: string, client_secret?: string) => axios.request<AppSettingsResponse>({
            method: "get",
            url: `/v3/appSettings`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(client_secret !== undefined ? { client_secret } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        measurementSpreadsheetUpload: (payload: {
            file?: string;
        }) => axios.request<number>({
            method: "post",
            url: `/v2/spreadsheetUpload`,
            data: payload,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => res.data),
        measurementExportRequest: () => axios.request<number>({
            method: "post",
            url: `/v2/measurements/exportRequest`
        }).then(res => res.data),
        getMobileConnectPage: () => axios.request<unknown>({
            method: "get",
            url: `/v3/connect/mobile`
        }).then(res => res.data),
        getConnectors: (clientId?: string) => axios.request<GetConnectorsResponse>({
            method: "get",
            url: `/v3/connectors/list`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        connectConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail") => axios.request<unknown>({
            method: "get",
            url: `/v3/connectors/${connectorName}/connect`
        }).then(res => res.data),
        disconnectConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail") => axios.request<unknown>({
            method: "get",
            url: `/v3/connectors/${connectorName}/disconnect`
        }).then(res => res.data),
        updateConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail") => axios.request<unknown>({
            method: "get",
            url: `/v3/connectors/${connectorName}/update`
        }).then(res => res.data),
        getUserVariableRelationships: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string, commonOnly?: boolean) => axios.request<GetUserVariableRelationshipsResponse>({
            method: "get",
            url: `/v3/correlations`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(correlationCoefficient !== undefined ? { correlationCoefficient } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(outcomesOfInterest !== undefined ? { outcomesOfInterest } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(commonOnly !== undefined ? { commonOnly } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postDeviceToken: (payload: DeviceToken) => axios.request<unknown>({
            method: "post",
            url: `/v3/deviceTokens`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getFeed: (sort?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, clientId?: string) => axios.request<FeedResponse>({
            method: "get",
            url: `/v3/feed`,
            params: {
                ...(sort !== undefined ? { sort } : undefined),
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postFeed: (payload: Card[], clientId?: string) => axios.request<FeedResponse>({
            method: "post",
            url: `/v3/feed`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getIntegrationJs: (clientId?: string) => axios.request<unknown>({
            method: "get",
            url: `/v3/integration.js`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getNotificationPreferences: () => axios.request<unknown>({
            method: "get",
            url: `/v3/notificationPreferences`
        }).then(res => res.data),
        getOauthAuthorizationCode: (response_type: string, scope: string, clientId?: string, client_secret?: string, redirect_uri?: string, state?: string) => axios.request<unknown>({
            method: "get",
            url: `/oauth/authorize`,
            params: {
                response_type,
                scope,
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(client_secret !== undefined ? { client_secret } : undefined),
                ...(redirect_uri !== undefined ? { redirect_uri } : undefined),
                ...(state !== undefined ? { state } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getAccessToken: (grant_type: string, code: string, response_type: string, scope: string, clientId?: string, client_secret?: string, redirect_uri?: string, state?: string) => axios.request<unknown>({
            method: "get",
            url: `/oauth/token`,
            params: {
                grant_type,
                code,
                response_type,
                scope,
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(client_secret !== undefined ? { client_secret } : undefined),
                ...(redirect_uri !== undefined ? { redirect_uri } : undefined),
                ...(state !== undefined ? { state } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getShares: (createdAt?: string, updatedAt?: string, clientId?: string, appVersion?: string, log?: string, pwd?: string) => axios.request<GetSharesResponse>({
            method: "get",
            url: `/v3/shares`,
            params: {
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(appVersion !== undefined ? { appVersion } : undefined),
                ...(log !== undefined ? { log } : undefined),
                ...(pwd !== undefined ? { pwd } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        deleteShare: (clientIdToRevoke: string, reason?: string) => axios.request<User>({
            method: "post",
            url: `/v3/shares/delete`,
            params: {
                clientIdToRevoke,
                ...(reason !== undefined ? { reason } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        inviteShare: (payload: ShareInvitationBody, clientId?: string) => axios.request<User>({
            method: "post",
            url: `/v3/shares/invite`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getStudies: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, principalInvestigatorUserId?: number, open?: boolean, joined?: boolean, created?: boolean, aggregated?: boolean, downvoted?: boolean) => axios.request<GetStudiesResponse>({
            method: "get",
            url: `/v3/studies`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(includeCharts !== undefined ? { includeCharts } : undefined),
                ...(recalculate !== undefined ? { recalculate } : undefined),
                ...(studyId !== undefined ? { studyId } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(correlationCoefficient !== undefined ? { correlationCoefficient } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(outcomesOfInterest !== undefined ? { outcomesOfInterest } : undefined),
                ...(principalInvestigatorUserId !== undefined ? { principalInvestigatorUserId } : undefined),
                ...(open !== undefined ? { open } : undefined),
                ...(joined !== undefined ? { joined } : undefined),
                ...(created !== undefined ? { created } : undefined),
                ...(aggregated !== undefined ? { aggregated } : undefined),
                ...(downvoted !== undefined ? { downvoted } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getOpenStudies: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string) => axios.request<GetStudiesResponse>({
            method: "get",
            url: `/v3/studies/open`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(includeCharts !== undefined ? { includeCharts } : undefined),
                ...(recalculate !== undefined ? { recalculate } : undefined),
                ...(studyId !== undefined ? { studyId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getStudiesJoined: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string) => axios.request<GetStudiesResponse>({
            method: "get",
            url: `/v3/studies/joined`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(correlationCoefficient !== undefined ? { correlationCoefficient } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(outcomesOfInterest !== undefined ? { outcomesOfInterest } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        getStudiesCreated: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, updatedAt?: string, clientId?: string) => axios.request<GetStudiesResponse>({
            method: "get",
            url: `/v3/studies/created`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        publishStudy: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string) => axios.request<PostStudyPublishResponse>({
            method: "post",
            url: `/v3/study/publish`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(includeCharts !== undefined ? { includeCharts } : undefined),
                ...(recalculate !== undefined ? { recalculate } : undefined),
                ...(studyId !== undefined ? { studyId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        joinStudy: (studyId?: string, causeVariableName?: string, effectVariableName?: string, clientId?: string) => axios.request<StudyJoinResponse>({
            method: "post",
            url: `/v3/study/join`,
            params: {
                ...(studyId !== undefined ? { studyId } : undefined),
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        createStudy: (payload: StudyCreationBody, clientId?: string) => axios.request<PostStudyCreateResponse>({
            method: "post",
            url: `/v3/study/create`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getTrackingReminderNotifications: (sort?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", reminderTime?: string, clientId?: string, onlyPast?: boolean, includeDeleted?: boolean) => axios.request<GetTrackingReminderNotificationsResponse>({
            method: "get",
            url: `/v3/trackingReminderNotifications`,
            params: {
                ...(sort !== undefined ? { sort } : undefined),
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(variableCategoryName !== undefined ? { variableCategoryName } : undefined),
                ...(reminderTime !== undefined ? { reminderTime } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(onlyPast !== undefined ? { onlyPast } : undefined),
                ...(includeDeleted !== undefined ? { includeDeleted } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postTrackingReminderNotifications: (payload: TrackingReminderNotificationPost[], clientId?: string) => axios.request<CommonResponse>({
            method: "post",
            url: `/v3/trackingReminderNotifications`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getTrackingReminders: (variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string) => axios.request<TrackingReminder[]>({
            method: "get",
            url: `/v3/trackingReminders`,
            params: {
                ...(variableCategoryName !== undefined ? { variableCategoryName } : undefined),
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(appVersion !== undefined ? { appVersion } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postTrackingReminders: (payload: TrackingReminder[]) => axios.request<PostTrackingRemindersResponse>({
            method: "post",
            url: `/v3/trackingReminders`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        deleteTrackingReminder: () => axios.request<CommonResponse>({
            method: "delete",
            url: `/v3/trackingReminders/delete`
        }).then(res => res.data),
        getUnitCategories: () => axios.request<UnitCategory[]>({
            method: "get",
            url: `/v3/unitCategories`
        }).then(res => res.data),
        getUser: (createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, clientUserId?: number, log?: string, pwd?: string, includeAuthorizedClients?: boolean) => axios.request<User>({
            method: "get",
            url: `/v3/user`,
            params: {
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(appVersion !== undefined ? { appVersion } : undefined),
                ...(clientUserId !== undefined ? { clientUserId } : undefined),
                ...(log !== undefined ? { log } : undefined),
                ...(pwd !== undefined ? { pwd } : undefined),
                ...(includeAuthorizedClients !== undefined ? { includeAuthorizedClients } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postUser: (payload: UserPostBody) => axios.request<unknown>({
            method: "post",
            url: `/v3/user`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getUsers: (createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, clientUserId?: number, log?: string, pwd?: string) => axios.request<UsersResponse>({
            method: "get",
            url: `/v3/users`,
            params: {
                ...(createdAt !== undefined ? { createdAt } : undefined),
                ...(updatedAt !== undefined ? { updatedAt } : undefined),
                ...(limit !== undefined ? { limit } : undefined),
                ...(offset !== undefined ? { offset } : undefined),
                ...(sort !== undefined ? { sort } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(appVersion !== undefined ? { appVersion } : undefined),
                ...(clientUserId !== undefined ? { clientUserId } : undefined),
                ...(log !== undefined ? { log } : undefined),
                ...(pwd !== undefined ? { pwd } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        deleteUser: (reason: string, clientId?: string) => axios.request<CommonResponse>({
            method: "delete",
            url: `/v3/user/delete`,
            params: {
                reason,
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        postUserSettings: (payload: User, clientId?: string) => axios.request<PostUserSettingsResponse>({
            method: "post",
            url: `/v3/userSettings`,
            params: {
                ...(clientId !== undefined ? { clientId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        postUserTags: (payload: UserTag) => axios.request<CommonResponse>({
            method: "post",
            url: `/v3/userTags`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        deleteUserTag: (taggedVariableId?: number, tagVariableId?: number) => axios.request<CommonResponse>({
            method: "delete",
            url: `/v3/userTags/delete`,
            params: {
                ...(taggedVariableId !== undefined ? { taggedVariableId } : undefined),
                ...(tagVariableId !== undefined ? { tagVariableId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data),
        deleteUserVariable: () => axios.request<unknown>({
            method: "delete",
            url: `/v3/userVariables/delete`
        }).then(res => res.data),
        resetUserVariableSettings: (payload: UserVariableDelete) => axios.request<unknown>({
            method: "post",
            url: `/v3/userVariables/reset`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        getVariableCategories: () => axios.request<VariableCategory[]>({
            method: "get",
            url: `/v3/variableCategories`
        }).then(res => res.data),
        postVote: (payload: Vote) => axios.request<CommonResponse>({
            method: "post",
            url: `/v3/votes`,
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.data),
        deleteVote: () => axios.request<CommonResponse>({
            method: "delete",
            url: `/v3/votes/delete`
        }).then(res => res.data),
        getStudy: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string) => axios.request<Study>({
            method: "get",
            url: `/v4/study`,
            params: {
                ...(causeVariableName !== undefined ? { causeVariableName } : undefined),
                ...(effectVariableName !== undefined ? { effectVariableName } : undefined),
                ...(clientId !== undefined ? { clientId } : undefined),
                ...(includeCharts !== undefined ? { includeCharts } : undefined),
                ...(recalculate !== undefined ? { recalculate } : undefined),
                ...(studyId !== undefined ? { studyId } : undefined)
            },
            paramsSerializer: config?.paramsSerializer
        }).then(res => res.data)
    } as const;
}
export type Requests = ReturnType<typeof makeRequests>;
export type Response<T extends keyof Requests> = Awaited<ReturnType<Requests[T]>>;
function makeQueries(requests: Requests) {
    return {
        useGetUnits: (options?: Omit<UseQueryOptions<Response<"getUnits">, unknown, Response<"getUnits">, ReturnType<QueryKeys["getUnits"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getUnits">, unknown> => useQuery({ queryKey: queryKeys.getUnits(), queryFn: () => requests.getUnits(), ...options }),
        useGetVariables: (includeCharts?: boolean, numberOfRawMeasurements?: string, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", name?: string, variableName?: string, updatedAt?: string, sourceName?: string, earliestMeasurementTime?: string, latestMeasurementTime?: string, id?: number, lastSourceName?: string, limit?: number, offset?: number, sort?: string, includePublic?: boolean, manualTracking?: boolean, clientId?: string, upc?: string, effectOrCause?: string, publicEffectOrCause?: string, exactMatch?: boolean, variableCategoryId?: number, includePrivate?: boolean, searchPhrase?: string, synonyms?: string, taggedVariableId?: number, tagVariableId?: number, joinVariableId?: number, parentUserTagVariableId?: number, childUserTagVariableId?: number, ingredientUserTagVariableId?: number, ingredientOfUserTagVariableId?: number, commonOnly?: boolean, userOnly?: boolean, includeTags?: boolean, recalculate?: boolean, variableId?: number, concise?: boolean, refresh?: boolean, options?: Omit<UseQueryOptions<Response<"getVariables">, unknown, Response<"getVariables">, ReturnType<QueryKeys["getVariables"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getVariables">, unknown> => useQuery({ queryKey: queryKeys.getVariables(includeCharts, numberOfRawMeasurements, variableCategoryName, name, variableName, updatedAt, sourceName, earliestMeasurementTime, latestMeasurementTime, id, lastSourceName, limit, offset, sort, includePublic, manualTracking, clientId, upc, effectOrCause, publicEffectOrCause, exactMatch, variableCategoryId, includePrivate, searchPhrase, synonyms, taggedVariableId, tagVariableId, joinVariableId, parentUserTagVariableId, childUserTagVariableId, ingredientUserTagVariableId, ingredientOfUserTagVariableId, commonOnly, userOnly, includeTags, recalculate, variableId, concise, refresh), queryFn: () => requests.getVariables(includeCharts, numberOfRawMeasurements, variableCategoryName, name, variableName, updatedAt, sourceName, earliestMeasurementTime, latestMeasurementTime, id, lastSourceName, limit, offset, sort, includePublic, manualTracking, clientId, upc, effectOrCause, publicEffectOrCause, exactMatch, variableCategoryId, includePrivate, searchPhrase, synonyms, taggedVariableId, tagVariableId, joinVariableId, parentUserTagVariableId, childUserTagVariableId, ingredientUserTagVariableId, ingredientOfUserTagVariableId, commonOnly, userOnly, includeTags, recalculate, variableId, concise, refresh), ...options }),
        useGetMeasurements: (variableName?: string, sort?: string, limit?: number, offset?: number, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", updatedAt?: string, sourceName?: string, connectorName?: string, value?: string, unitName?: "% Recommended Daily Allowance" | "-4 to 4 Rating" | "0 to 1 Rating" | "0 to 5 Rating" | "1 to 10 Rating" | "1 to 5 Rating" | "Applications" | "Beats per Minute" | "Calories" | "Capsules" | "Centimeters" | "Count" | "Degrees Celsius" | "Degrees East" | "Degrees Fahrenheit" | "Degrees North" | "Dollars" | "Drops" | "Event" | "Feet" | "Grams" | "Hours" | "Inches" | "Index" | "Kilocalories" | "Kilograms" | "Kilometers" | "Liters" | "Meters" | "Micrograms" | "Micrograms per decilitre" | "Miles" | "Milligrams" | "Milliliters" | "Millimeters" | "Millimeters Merc" | "Milliseconds" | "Minutes" | "Pascal" | "Percent" | "Pieces" | "Pills" | "Pounds" | "Puffs" | "Seconds" | "Serving" | "Sprays" | "Tablets" | "Torr" | "Units" | "Yes/No" | "per Minute" | "Doses" | "Quarts" | "Ounces" | "International Units" | "Meters per Second", earliestMeasurementTime?: string, latestMeasurementTime?: string, createdAt?: string, id?: number, groupingWidth?: number, groupingTimezone?: string, doNotProcess?: boolean, clientId?: string, doNotConvert?: boolean, minMaxFilter?: boolean, options?: Omit<UseQueryOptions<Response<"getMeasurements">, unknown, Response<"getMeasurements">, ReturnType<QueryKeys["getMeasurements"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getMeasurements">, unknown> => useQuery({ queryKey: queryKeys.getMeasurements(variableName, sort, limit, offset, variableCategoryName, updatedAt, sourceName, connectorName, value, unitName, earliestMeasurementTime, latestMeasurementTime, createdAt, id, groupingWidth, groupingTimezone, doNotProcess, clientId, doNotConvert, minMaxFilter), queryFn: () => requests.getMeasurements(variableName, sort, limit, offset, variableCategoryName, updatedAt, sourceName, connectorName, value, unitName, earliestMeasurementTime, latestMeasurementTime, createdAt, id, groupingWidth, groupingTimezone, doNotProcess, clientId, doNotConvert, minMaxFilter), ...options }),
        useGetAppSettings: (clientId?: string, client_secret?: string, options?: Omit<UseQueryOptions<Response<"getAppSettings">, unknown, Response<"getAppSettings">, ReturnType<QueryKeys["getAppSettings"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getAppSettings">, unknown> => useQuery({ queryKey: queryKeys.getAppSettings(clientId, client_secret), queryFn: () => requests.getAppSettings(clientId, client_secret), ...options }),
        useGetMobileConnectPage: (options?: Omit<UseQueryOptions<Response<"getMobileConnectPage">, unknown, Response<"getMobileConnectPage">, ReturnType<QueryKeys["getMobileConnectPage"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getMobileConnectPage">, unknown> => useQuery({ queryKey: queryKeys.getMobileConnectPage(), queryFn: () => requests.getMobileConnectPage(), ...options }),
        useGetConnectors: (clientId?: string, options?: Omit<UseQueryOptions<Response<"getConnectors">, unknown, Response<"getConnectors">, ReturnType<QueryKeys["getConnectors"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getConnectors">, unknown> => useQuery({ queryKey: queryKeys.getConnectors(clientId), queryFn: () => requests.getConnectors(clientId), ...options }),
        useConnectConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail", options?: Omit<UseQueryOptions<Response<"connectConnector">, unknown, Response<"connectConnector">, ReturnType<QueryKeys["connectConnector"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"connectConnector">, unknown> => useQuery({ queryKey: queryKeys.connectConnector(connectorName), queryFn: () => requests.connectConnector(connectorName), ...options }),
        useDisconnectConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail", options?: Omit<UseQueryOptions<Response<"disconnectConnector">, unknown, Response<"disconnectConnector">, ReturnType<QueryKeys["disconnectConnector"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"disconnectConnector">, unknown> => useQuery({ queryKey: queryKeys.disconnectConnector(connectorName), queryFn: () => requests.disconnectConnector(connectorName), ...options }),
        useUpdateConnector: (connectorName: "facebook" | "fitbit" | "github" | "googlecalendar" | "googlefit" | "medhelper" | "mint" | "moodpanda" | "moodscope" | "myfitnesspal" | "mynetdiary" | "netatmo" | "rescuetime" | "runkeeper" | "slack" | "sleepcloud" | "slice" | "up" | "whatpulse" | "withings" | "worldweatheronline" | "foursquare" | "strava" | "gmail", options?: Omit<UseQueryOptions<Response<"updateConnector">, unknown, Response<"updateConnector">, ReturnType<QueryKeys["updateConnector"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"updateConnector">, unknown> => useQuery({ queryKey: queryKeys.updateConnector(connectorName), queryFn: () => requests.updateConnector(connectorName), ...options }),
        useGetUserVariableRelationships: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string, commonOnly?: boolean, options?: Omit<UseQueryOptions<Response<"getUserVariableRelationships">, unknown, Response<"getUserVariableRelationships">, ReturnType<QueryKeys["getUserVariableRelationships"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getUserVariableRelationships">, unknown> => useQuery({ queryKey: queryKeys.getUserVariableRelationships(causeVariableName, effectVariableName, sort, limit, offset, correlationCoefficient, updatedAt, outcomesOfInterest, clientId, commonOnly), queryFn: () => requests.getUserVariableRelationships(causeVariableName, effectVariableName, sort, limit, offset, correlationCoefficient, updatedAt, outcomesOfInterest, clientId, commonOnly), ...options }),
        useGetFeed: (sort?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, clientId?: string, options?: Omit<UseQueryOptions<Response<"getFeed">, unknown, Response<"getFeed">, ReturnType<QueryKeys["getFeed"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getFeed">, unknown> => useQuery({ queryKey: queryKeys.getFeed(sort, createdAt, updatedAt, limit, offset, clientId), queryFn: () => requests.getFeed(sort, createdAt, updatedAt, limit, offset, clientId), ...options }),
        useGetIntegrationJs: (clientId?: string, options?: Omit<UseQueryOptions<Response<"getIntegrationJs">, unknown, Response<"getIntegrationJs">, ReturnType<QueryKeys["getIntegrationJs"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getIntegrationJs">, unknown> => useQuery({ queryKey: queryKeys.getIntegrationJs(clientId), queryFn: () => requests.getIntegrationJs(clientId), ...options }),
        useGetNotificationPreferences: (options?: Omit<UseQueryOptions<Response<"getNotificationPreferences">, unknown, Response<"getNotificationPreferences">, ReturnType<QueryKeys["getNotificationPreferences"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getNotificationPreferences">, unknown> => useQuery({ queryKey: queryKeys.getNotificationPreferences(), queryFn: () => requests.getNotificationPreferences(), ...options }),
        useGetOauthAuthorizationCode: (response_type: string, scope: string, clientId?: string, client_secret?: string, redirect_uri?: string, state?: string, options?: Omit<UseQueryOptions<Response<"getOauthAuthorizationCode">, unknown, Response<"getOauthAuthorizationCode">, ReturnType<QueryKeys["getOauthAuthorizationCode"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getOauthAuthorizationCode">, unknown> => useQuery({ queryKey: queryKeys.getOauthAuthorizationCode(response_type, scope, clientId, client_secret, redirect_uri, state), queryFn: () => requests.getOauthAuthorizationCode(response_type, scope, clientId, client_secret, redirect_uri, state), ...options }),
        useGetAccessToken: (grant_type: string, code: string, response_type: string, scope: string, clientId?: string, client_secret?: string, redirect_uri?: string, state?: string, options?: Omit<UseQueryOptions<Response<"getAccessToken">, unknown, Response<"getAccessToken">, ReturnType<QueryKeys["getAccessToken"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getAccessToken">, unknown> => useQuery({ queryKey: queryKeys.getAccessToken(grant_type, code, response_type, scope, clientId, client_secret, redirect_uri, state), queryFn: () => requests.getAccessToken(grant_type, code, response_type, scope, clientId, client_secret, redirect_uri, state), ...options }),
        useGetShares: (createdAt?: string, updatedAt?: string, clientId?: string, appVersion?: string, log?: string, pwd?: string, options?: Omit<UseQueryOptions<Response<"getShares">, unknown, Response<"getShares">, ReturnType<QueryKeys["getShares"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getShares">, unknown> => useQuery({ queryKey: queryKeys.getShares(createdAt, updatedAt, clientId, appVersion, log, pwd), queryFn: () => requests.getShares(createdAt, updatedAt, clientId, appVersion, log, pwd), ...options }),
        useGetStudies: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, principalInvestigatorUserId?: number, open?: boolean, joined?: boolean, created?: boolean, aggregated?: boolean, downvoted?: boolean, options?: Omit<UseQueryOptions<Response<"getStudies">, unknown, Response<"getStudies">, ReturnType<QueryKeys["getStudies"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getStudies">, unknown> => useQuery({ queryKey: queryKeys.getStudies(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId, sort, limit, offset, correlationCoefficient, updatedAt, outcomesOfInterest, principalInvestigatorUserId, open, joined, created, aggregated, downvoted), queryFn: () => requests.getStudies(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId, sort, limit, offset, correlationCoefficient, updatedAt, outcomesOfInterest, principalInvestigatorUserId, open, joined, created, aggregated, downvoted), ...options }),
        useGetOpenStudies: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string, options?: Omit<UseQueryOptions<Response<"getOpenStudies">, unknown, Response<"getOpenStudies">, ReturnType<QueryKeys["getOpenStudies"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getOpenStudies">, unknown> => useQuery({ queryKey: queryKeys.getOpenStudies(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId), queryFn: () => requests.getOpenStudies(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId), ...options }),
        useGetStudiesJoined: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, correlationCoefficient?: string, updatedAt?: string, outcomesOfInterest?: boolean, clientId?: string, options?: Omit<UseQueryOptions<Response<"getStudiesJoined">, unknown, Response<"getStudiesJoined">, ReturnType<QueryKeys["getStudiesJoined"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getStudiesJoined">, unknown> => useQuery({ queryKey: queryKeys.getStudiesJoined(causeVariableName, effectVariableName, sort, limit, offset, correlationCoefficient, updatedAt, outcomesOfInterest, clientId), queryFn: () => requests.getStudiesJoined(causeVariableName, effectVariableName, sort, limit, offset, correlationCoefficient, updatedAt, outcomesOfInterest, clientId), ...options }),
        useGetStudiesCreated: (causeVariableName?: string, effectVariableName?: string, sort?: string, limit?: number, offset?: number, updatedAt?: string, clientId?: string, options?: Omit<UseQueryOptions<Response<"getStudiesCreated">, unknown, Response<"getStudiesCreated">, ReturnType<QueryKeys["getStudiesCreated"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getStudiesCreated">, unknown> => useQuery({ queryKey: queryKeys.getStudiesCreated(causeVariableName, effectVariableName, sort, limit, offset, updatedAt, clientId), queryFn: () => requests.getStudiesCreated(causeVariableName, effectVariableName, sort, limit, offset, updatedAt, clientId), ...options }),
        useGetTrackingReminderNotifications: (sort?: string, createdAt?: string, updatedAt?: string, limit?: number, offset?: number, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", reminderTime?: string, clientId?: string, onlyPast?: boolean, includeDeleted?: boolean, options?: Omit<UseQueryOptions<Response<"getTrackingReminderNotifications">, unknown, Response<"getTrackingReminderNotifications">, ReturnType<QueryKeys["getTrackingReminderNotifications"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getTrackingReminderNotifications">, unknown> => useQuery({ queryKey: queryKeys.getTrackingReminderNotifications(sort, createdAt, updatedAt, limit, offset, variableCategoryName, reminderTime, clientId, onlyPast, includeDeleted), queryFn: () => requests.getTrackingReminderNotifications(sort, createdAt, updatedAt, limit, offset, variableCategoryName, reminderTime, clientId, onlyPast, includeDeleted), ...options }),
        useGetTrackingReminders: (variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, options?: Omit<UseQueryOptions<Response<"getTrackingReminders">, unknown, Response<"getTrackingReminders">, ReturnType<QueryKeys["getTrackingReminders"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getTrackingReminders">, unknown> => useQuery({ queryKey: queryKeys.getTrackingReminders(variableCategoryName, createdAt, updatedAt, limit, offset, sort, clientId, appVersion), queryFn: () => requests.getTrackingReminders(variableCategoryName, createdAt, updatedAt, limit, offset, sort, clientId, appVersion), ...options }),
        useGetUnitCategories: (options?: Omit<UseQueryOptions<Response<"getUnitCategories">, unknown, Response<"getUnitCategories">, ReturnType<QueryKeys["getUnitCategories"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getUnitCategories">, unknown> => useQuery({ queryKey: queryKeys.getUnitCategories(), queryFn: () => requests.getUnitCategories(), ...options }),
        useGetUser: (createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, clientUserId?: number, log?: string, pwd?: string, includeAuthorizedClients?: boolean, options?: Omit<UseQueryOptions<Response<"getUser">, unknown, Response<"getUser">, ReturnType<QueryKeys["getUser"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getUser">, unknown> => useQuery({ queryKey: queryKeys.getUser(createdAt, updatedAt, limit, offset, sort, clientId, appVersion, clientUserId, log, pwd, includeAuthorizedClients), queryFn: () => requests.getUser(createdAt, updatedAt, limit, offset, sort, clientId, appVersion, clientUserId, log, pwd, includeAuthorizedClients), ...options }),
        useGetUsers: (createdAt?: string, updatedAt?: string, limit?: number, offset?: number, sort?: string, clientId?: string, appVersion?: string, clientUserId?: number, log?: string, pwd?: string, options?: Omit<UseQueryOptions<Response<"getUsers">, unknown, Response<"getUsers">, ReturnType<QueryKeys["getUsers"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getUsers">, unknown> => useQuery({ queryKey: queryKeys.getUsers(createdAt, updatedAt, limit, offset, sort, clientId, appVersion, clientUserId, log, pwd), queryFn: () => requests.getUsers(createdAt, updatedAt, limit, offset, sort, clientId, appVersion, clientUserId, log, pwd), ...options }),
        useGetVariableCategories: (options?: Omit<UseQueryOptions<Response<"getVariableCategories">, unknown, Response<"getVariableCategories">, ReturnType<QueryKeys["getVariableCategories"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getVariableCategories">, unknown> => useQuery({ queryKey: queryKeys.getVariableCategories(), queryFn: () => requests.getVariableCategories(), ...options }),
        useGetStudy: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string, options?: Omit<UseQueryOptions<Response<"getStudy">, unknown, Response<"getStudy">, ReturnType<QueryKeys["getStudy"]>>, "queryKey" | "queryFn">): UseQueryResult<Response<"getStudy">, unknown> => useQuery({ queryKey: queryKeys.getStudy(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId), queryFn: () => requests.getStudy(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId), ...options })
    } as const;
}
type MutationConfigs = {
    usePostUserVariables?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postUserVariables">, unknown, Parameters<Requests["postUserVariables"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostMeasurements?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postMeasurements">, unknown, Parameters<Requests["postMeasurements"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useUpdateMeasurement?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"updateMeasurement">, unknown, Parameters<Requests["updateMeasurement"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteMeasurement?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteMeasurement">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useMeasurementSpreadsheetUpload?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"measurementSpreadsheetUpload">, unknown, Parameters<Requests["measurementSpreadsheetUpload"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useMeasurementExportRequest?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"measurementExportRequest">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostDeviceToken?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postDeviceToken">, unknown, Parameters<Requests["postDeviceToken"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostFeed?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postFeed">, unknown, Parameters<Requests["postFeed"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteShare?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteShare">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useInviteShare?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"inviteShare">, unknown, Parameters<Requests["inviteShare"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePublishStudy?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"publishStudy">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useJoinStudy?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"joinStudy">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useCreateStudy?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"createStudy">, unknown, Parameters<Requests["createStudy"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostTrackingReminderNotifications?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postTrackingReminderNotifications">, unknown, Parameters<Requests["postTrackingReminderNotifications"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostTrackingReminders?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postTrackingReminders">, unknown, Parameters<Requests["postTrackingReminders"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteTrackingReminder?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteTrackingReminder">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postUser">, unknown, Parameters<Requests["postUser"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteUser?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteUser">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostUserSettings?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postUserSettings">, unknown, Parameters<Requests["postUserSettings"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostUserTags?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postUserTags">, unknown, Parameters<Requests["postUserTags"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteUserTag?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteUserTag">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteUserVariable?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteUserVariable">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
    useResetUserVariableSettings?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"resetUserVariableSettings">, unknown, Parameters<Requests["resetUserVariableSettings"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    usePostVote?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"postVote">, unknown, Parameters<Requests["postVote"]>[0], unknown>, "onSuccess" | "onSettled" | "onError">;
    useDeleteVote?: (queryClient: QueryClient) => Pick<UseMutationOptions<Response<"deleteVote">, unknown, unknown, unknown>, "onSuccess" | "onSettled" | "onError">;
};
function makeMutations(requests: Requests, config?: Config["mutations"]) {
    return {
        usePostUserVariables: (includePrivate?: boolean, clientId?: string, includePublic?: boolean, searchPhrase?: string, exactMatch?: boolean, manualTracking?: boolean, variableCategoryName?: "Activities" | "Books" | "Causes of Illness" | "Cognitive Performance" | "Conditions" | "Emotions" | "Environment" | "Foods" | "Location" | "Miscellaneous" | "Movies and TV" | "Music" | "Nutrients" | "Payments" | "Physical Activity" | "Physique" | "Sleep" | "Social Interactions" | "Software" | "Symptoms" | "Treatments" | "Vital Signs" | "Goals", variableCategoryId?: number, synonyms?: string, options?: Omit<UseMutationOptions<Response<"postUserVariables">, unknown, Parameters<Requests["postUserVariables"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postUserVariables">, unknown, Parameters<Requests["postUserVariables"]>[0]>(payload => requests.postUserVariables(payload, includePrivate, clientId, includePublic, searchPhrase, exactMatch, manualTracking, variableCategoryName, variableCategoryId, synonyms), config?.usePostUserVariables, options),
        usePostMeasurements: (options?: Omit<UseMutationOptions<Response<"postMeasurements">, unknown, Parameters<Requests["postMeasurements"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postMeasurements">, unknown, Parameters<Requests["postMeasurements"]>[0]>(payload => requests.postMeasurements(payload), config?.usePostMeasurements, options),
        useUpdateMeasurement: (options?: Omit<UseMutationOptions<Response<"updateMeasurement">, unknown, Parameters<Requests["updateMeasurement"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"updateMeasurement">, unknown, Parameters<Requests["updateMeasurement"]>[0]>(payload => requests.updateMeasurement(payload), config?.useUpdateMeasurement, options),
        useDeleteMeasurement: (options?: Omit<UseMutationOptions<Response<"deleteMeasurement">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteMeasurement">, unknown, unknown>(() => requests.deleteMeasurement(), config?.useDeleteMeasurement, options),
        useMeasurementSpreadsheetUpload: (options?: Omit<UseMutationOptions<Response<"measurementSpreadsheetUpload">, unknown, Parameters<Requests["measurementSpreadsheetUpload"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"measurementSpreadsheetUpload">, unknown, Parameters<Requests["measurementSpreadsheetUpload"]>[0]>(payload => requests.measurementSpreadsheetUpload(payload), config?.useMeasurementSpreadsheetUpload, options),
        useMeasurementExportRequest: (options?: Omit<UseMutationOptions<Response<"measurementExportRequest">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"measurementExportRequest">, unknown, unknown>(() => requests.measurementExportRequest(), config?.useMeasurementExportRequest, options),
        usePostDeviceToken: (options?: Omit<UseMutationOptions<Response<"postDeviceToken">, unknown, Parameters<Requests["postDeviceToken"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postDeviceToken">, unknown, Parameters<Requests["postDeviceToken"]>[0]>(payload => requests.postDeviceToken(payload), config?.usePostDeviceToken, options),
        usePostFeed: (clientId?: string, options?: Omit<UseMutationOptions<Response<"postFeed">, unknown, Parameters<Requests["postFeed"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postFeed">, unknown, Parameters<Requests["postFeed"]>[0]>(payload => requests.postFeed(payload, clientId), config?.usePostFeed, options),
        useDeleteShare: (clientIdToRevoke: string, reason?: string, options?: Omit<UseMutationOptions<Response<"deleteShare">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteShare">, unknown, unknown>(() => requests.deleteShare(clientIdToRevoke, reason), config?.useDeleteShare, options),
        useInviteShare: (clientId?: string, options?: Omit<UseMutationOptions<Response<"inviteShare">, unknown, Parameters<Requests["inviteShare"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"inviteShare">, unknown, Parameters<Requests["inviteShare"]>[0]>(payload => requests.inviteShare(payload, clientId), config?.useInviteShare, options),
        usePublishStudy: (causeVariableName?: string, effectVariableName?: string, clientId?: string, includeCharts?: boolean, recalculate?: boolean, studyId?: string, options?: Omit<UseMutationOptions<Response<"publishStudy">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"publishStudy">, unknown, unknown>(() => requests.publishStudy(causeVariableName, effectVariableName, clientId, includeCharts, recalculate, studyId), config?.usePublishStudy, options),
        useJoinStudy: (studyId?: string, causeVariableName?: string, effectVariableName?: string, clientId?: string, options?: Omit<UseMutationOptions<Response<"joinStudy">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"joinStudy">, unknown, unknown>(() => requests.joinStudy(studyId, causeVariableName, effectVariableName, clientId), config?.useJoinStudy, options),
        useCreateStudy: (clientId?: string, options?: Omit<UseMutationOptions<Response<"createStudy">, unknown, Parameters<Requests["createStudy"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"createStudy">, unknown, Parameters<Requests["createStudy"]>[0]>(payload => requests.createStudy(payload, clientId), config?.useCreateStudy, options),
        usePostTrackingReminderNotifications: (clientId?: string, options?: Omit<UseMutationOptions<Response<"postTrackingReminderNotifications">, unknown, Parameters<Requests["postTrackingReminderNotifications"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postTrackingReminderNotifications">, unknown, Parameters<Requests["postTrackingReminderNotifications"]>[0]>(payload => requests.postTrackingReminderNotifications(payload, clientId), config?.usePostTrackingReminderNotifications, options),
        usePostTrackingReminders: (options?: Omit<UseMutationOptions<Response<"postTrackingReminders">, unknown, Parameters<Requests["postTrackingReminders"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postTrackingReminders">, unknown, Parameters<Requests["postTrackingReminders"]>[0]>(payload => requests.postTrackingReminders(payload), config?.usePostTrackingReminders, options),
        useDeleteTrackingReminder: (options?: Omit<UseMutationOptions<Response<"deleteTrackingReminder">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteTrackingReminder">, unknown, unknown>(() => requests.deleteTrackingReminder(), config?.useDeleteTrackingReminder, options),
        usePostUser: (options?: Omit<UseMutationOptions<Response<"postUser">, unknown, Parameters<Requests["postUser"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postUser">, unknown, Parameters<Requests["postUser"]>[0]>(payload => requests.postUser(payload), config?.usePostUser, options),
        useDeleteUser: (reason: string, clientId?: string, options?: Omit<UseMutationOptions<Response<"deleteUser">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteUser">, unknown, unknown>(() => requests.deleteUser(reason, clientId), config?.useDeleteUser, options),
        usePostUserSettings: (clientId?: string, options?: Omit<UseMutationOptions<Response<"postUserSettings">, unknown, Parameters<Requests["postUserSettings"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postUserSettings">, unknown, Parameters<Requests["postUserSettings"]>[0]>(payload => requests.postUserSettings(payload, clientId), config?.usePostUserSettings, options),
        usePostUserTags: (options?: Omit<UseMutationOptions<Response<"postUserTags">, unknown, Parameters<Requests["postUserTags"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postUserTags">, unknown, Parameters<Requests["postUserTags"]>[0]>(payload => requests.postUserTags(payload), config?.usePostUserTags, options),
        useDeleteUserTag: (taggedVariableId?: number, tagVariableId?: number, options?: Omit<UseMutationOptions<Response<"deleteUserTag">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteUserTag">, unknown, unknown>(() => requests.deleteUserTag(taggedVariableId, tagVariableId), config?.useDeleteUserTag, options),
        useDeleteUserVariable: (options?: Omit<UseMutationOptions<Response<"deleteUserVariable">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteUserVariable">, unknown, unknown>(() => requests.deleteUserVariable(), config?.useDeleteUserVariable, options),
        useResetUserVariableSettings: (options?: Omit<UseMutationOptions<Response<"resetUserVariableSettings">, unknown, Parameters<Requests["resetUserVariableSettings"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"resetUserVariableSettings">, unknown, Parameters<Requests["resetUserVariableSettings"]>[0]>(payload => requests.resetUserVariableSettings(payload), config?.useResetUserVariableSettings, options),
        usePostVote: (options?: Omit<UseMutationOptions<Response<"postVote">, unknown, Parameters<Requests["postVote"]>[0], unknown>, "mutationFn">) => useRapiniMutation<Response<"postVote">, unknown, Parameters<Requests["postVote"]>[0]>(payload => requests.postVote(payload), config?.usePostVote, options),
        useDeleteVote: (options?: Omit<UseMutationOptions<Response<"deleteVote">, unknown, unknown, unknown>, "mutationFn">) => useRapiniMutation<Response<"deleteVote">, unknown, unknown>(() => requests.deleteVote(), config?.useDeleteVote, options)
    } as const;
}
