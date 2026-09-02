// Flow: production-database-release-planner

// -- Meta --
export const meta = {
  "name": "Production Database Release Planner",
  "description": "",
  "tags": [],
  "testInput": null,
  "githubUrl": "",
  "documentationUrl": "",
  "deployUrl": "",
  "author": {
    "name": "tiya nahar",
    "email": "oneandonlytiya123@gmail.com"
  }
};

// -- Inputs --
export const inputs = {
  "llmNode": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ],
  "LLMNode_860": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ],
  "LLMNode_316": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ],
  "LLMNode_840": [
    {
      "name": "generativeModelName",
      "label": "Generative Model Name",
      "type": "model"
    }
  ]
};

// -- References --
export const references = {
  "constitutions": {
    "default": "@constitutions/default.md"
  },
  "prompts": {
    "production_database_release_planner_llm_node_system_0": "@prompts/production-database-release-planner_llm-node_system_0.md",
    "production_database_release_planner_llm_node_user_1": "@prompts/production-database-release-planner_llm-node_user_1.md",
    "production_database_release_planner_llmnode_860_system_0": "@prompts/production-database-release-planner_llmnode-860_system_0.md",
    "production_database_release_planner_llmnode_860_user_1": "@prompts/production-database-release-planner_llmnode-860_user_1.md",
    "production_database_release_planner_llmnode_316_system_0": "@prompts/production-database-release-planner_llmnode-316_system_0.md",
    "production_database_release_planner_llmnode_316_user_1": "@prompts/production-database-release-planner_llmnode-316_user_1.md",
    "production_database_release_planner_llmnode_840_system_0": "@prompts/production-database-release-planner_llmnode-840_system_0.md",
    "production_database_release_planner_llmnode_840_user_1": "@prompts/production-database-release-planner_llmnode-840_user_1.md"
  },
  "modelConfigs": {
    "production_database_release_planner_llm_node_generative_model_name": "@model-configs/production-database-release-planner_llm-node_generative-model-name.ts",
    "production_database_release_planner_llmnode_860_generative_model_name": "@model-configs/production-database-release-planner_llmnode-860_generative-model-name.ts",
    "production_database_release_planner_llmnode_316_generative_model_name": "@model-configs/production-database-release-planner_llmnode-316_generative-model-name.ts",
    "production_database_release_planner_llmnode_840_generative_model_name": "@model-configs/production-database-release-planner_llmnode-840_generative-model-name.ts"
  }
};

// -- Nodes & Edges --
export const nodes = [
  {
    "id": "trigger",
    "type": "triggerNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "chatTriggerNode",
      "trigger": true,
      "values": {
        "chat": "",
        "domains": [
          "*"
        ],
        "nodeName": "Chat Widget",
        "chatConfig": {
          "botName": "Lamatic Bot",
          "imageUrl": "https://img.freepik.com/premium-vector/robot-android-super-hero_111928-7.jpg?w=826",
          "position": "right",
          "policyUrl": "https://lamatic.ai/docs/legal/privacy-policy",
          "displayMode": "popup",
          "placeholder": "Compose your message",
          "suggestions": [
            "What is lamatic?",
            "How do I add data to my chatbot?",
            "Explain this product to me"
          ],
          "errorMessage": "Oops! Something went wrong. Please try again.",
          "hideBranding": false,
          "primaryColor": "#ef4444",
          "headerBgColor": "#000000",
          "greetingMessage": "Hi, I am Lamatic Bot. Ask me anything about Lamatic",
          "headerTextColor": "#FFFFFF",
          "showEmojiButton": true,
          "suggestionBgColor": "#f1f5f9",
          "userMessageBgColor": "#FEF2F2",
          "agentMessageBgColor": "#f1f5f9",
          "suggestionTextColor": "#334155",
          "userMessageTextColor": "#d12323",
          "agentMessageTextColor": "#334155"
        }
      }
    }
  },
  {
    "id": "llmNode",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "LLMNode",
      "values": {
        "id": "llmNode",
        "tools": [],
        "prompts": [
          {
            "id": "b632375f-f156-421c-8912-c41faa3719d6",
            "role": "system",
            "content": "@prompts/production-database-release-planner_llm-node_system_0.md"
          },
          {
            "id": "40edaca9-9a7c-4931-b3c7-750d7c035539",
            "role": "user",
            "content": "@prompts/production-database-release-planner_llm-node_user_1.md"
          }
        ],
        "memories": "[]",
        "messages": "[]",
        "nodeName": "Migration Understanding Agent",
        "attachments": "",
        "credentials": "",
        "generativeModelName": "@model-configs/production-database-release-planner_llm-node_generative-model-name.ts"
      }
    }
  },
  {
    "id": "LLMNode_860",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "LLMNode",
      "values": {
        "tools": [],
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "role": "system",
            "content": "@prompts/production-database-release-planner_llmnode-860_system_0.md"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "role": "user",
            "content": "@prompts/production-database-release-planner_llmnode-860_user_1.md"
          }
        ],
        "memories": "[]",
        "messages": "[]",
        "nodeName": "Database Behavior Evaluator",
        "attachments": "",
        "credentials": "",
        "generativeModelName": "@model-configs/production-database-release-planner_llmnode-860_generative-model-name.ts"
      }
    }
  },
  {
    "id": "LLMNode_316",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "LLMNode",
      "values": {
        "tools": [],
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "role": "system",
            "content": "@prompts/production-database-release-planner_llmnode-316_system_0.md"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "role": "user",
            "content": "@prompts/production-database-release-planner_llmnode-316_user_1.md"
          }
        ],
        "memories": "[]",
        "messages": "[]",
        "nodeName": "Deployment Strategy Planner",
        "attachments": "",
        "credentials": "",
        "generativeModelName": "@model-configs/production-database-release-planner_llmnode-316_generative-model-name.ts"
      }
    }
  },
  {
    "id": "LLMNode_840",
    "type": "dynamicNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "LLMNode",
      "values": {
        "tools": [],
        "prompts": [
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
            "role": "system",
            "content": "@prompts/production-database-release-planner_llmnode-840_system_0.md"
          },
          {
            "id": "187c2f4b-c23d-4545-abef-73dc897d6b7d",
            "role": "user",
            "content": "@prompts/production-database-release-planner_llmnode-840_user_1.md"
          }
        ],
        "memories": "[]",
        "messages": "[]",
        "nodeName": "Release Decision & Rollback Advisor",
        "attachments": "",
        "credentials": "",
        "generativeModelName": "@model-configs/production-database-release-planner_llmnode-840_generative-model-name.ts"
      }
    }
  },
  {
    "id": "responseNode_trigger",
    "type": "responseNode",
    "position": {
      "x": 0,
      "y": 0
    },
    "data": {
      "nodeId": "chatResponseNode",
      "values": {
        "id": "responseNode_trigger",
        "content": "{{LLMNode_840.output.generatedResponse}}",
        "nodeName": "Chat Response",
        "references": "",
        "webhookUrl": "",
        "webhookHeaders": ""
      }
    }
  }
];

export const edges = [
  {
    "id": "trigger-llmNode",
    "source": "trigger",
    "target": "llmNode",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "llmNode-LLMNode_860",
    "source": "llmNode",
    "target": "LLMNode_860",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "LLMNode_860-LLMNode_316",
    "source": "LLMNode_860",
    "target": "LLMNode_316",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "LLMNode_316-LLMNode_840",
    "source": "LLMNode_316",
    "target": "LLMNode_840",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "LLMNode_840-responseNode_trigger",
    "source": "LLMNode_840",
    "target": "responseNode_trigger",
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "type": "defaultEdge"
  },
  {
    "id": "response-trigger_trigger",
    "source": "trigger",
    "target": "responseNode_trigger",
    "sourceHandle": "to-response",
    "targetHandle": "from-trigger",
    "type": "responseEdge"
  }
];

export default { meta, inputs, references, nodes, edges };
