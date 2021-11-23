import * as convict from 'convict';
import {taskBasicConfig, TaskBasicConfig} from "./taskBasicConfig";

export class RunGenerateAndBuildTaskCliConfig extends TaskBasicConfig {
    sdkRepo: string;
    specFolder: string;
    headSha: string;
    headRef: string;
    repoHttpsUrl: string;
    relatedReadmeMdFile: string;
    serviceType: string;
    language: string;
    generateAndBuildInputJson: string;
    generateAndBuildOutputJson: string;
    azureStorageBlobSasUrl: string;
    azureBlobContainerName: string;
    resourceProvider: string;
    sdkGenerationName: string;
}

export const runGenerateAndBuildTaskCliConfig = convict<RunGenerateAndBuildTaskCliConfig>({
    sdkRepo: {
        default: '',
        env: 'SDK_REPO',
        format: String
    },
    specFolder: {
        default: '',
        env: 'SPEC_FOLDER',
        format: String
    },
    headSha: {
        default: '',
        env: 'HEAD_SHA',
        format: String
    },
    headRef: {
        default: '',
        env: 'HEAD_REF',
        format: String
    },
    repoHttpsUrl: {
        default: 'https://github.com/Azure/azure-rest-api-specs',
        env: 'REPO_HTTP_URL',
        format: String
    },
    relatedReadmeMdFile: {
        default: '',
        env: 'RELATED_README_MD_FILE',
        format: String
    },
    serviceType: {
        default: 'resource-manager',
        env: 'SERVICE_TYPE',
        format: String
    },
    language: {
        default: 'unknown',
        env: 'LANGUAGE',
        format: String
    },
    resourceProvider: {
        default: 'unknown',
        env: "RESOURCE_PROVIDER",
        format: String
    },
    generateAndBuildInputJson: {
        default: '/tmp/generateAndBuildInput.json',
        env: 'GENERATE_AND_BUILD_INPUT_JSON',
        format: String
    },
    generateAndBuildOutputJson: {
        default: '/tmp/generateAndBuildOutput.json',
        env: 'GENERATE_AND_BUILD_OUTPUT_JSON',
        format: String
    },
    azureStorageBlobSasUrl: {
        default: '',
        env: 'AZURE_STORAGE_BLOB_SAS_URL',
        format: String
    },
    azureBlobContainerName: {
        default: 'sdks',
        env: 'AZURE_BLOB_CONTAINER_NAME',
        format: String
    },
    sdkGenerationName: {
        default: '',
        env: 'SDK_GENERATION_NAME',
        format: String
    },
    ...taskBasicConfig
});
