import type { Project } from "@/types/portfolio";

export const seriousProjects: Project[] = [
  {
    title: "RFP Management Automation System",
    description:
      "A Retrieval-Augmented Generation (RAG) system that semantically retrieves and analyzes proposal documents using vector-based similarity search, with an end-to-end pipeline for document ingestion, chunking, and context-grounded LLM responses to generate accurate summaries and cross-proposal insights.",
    image: "",
    tech: [
      "Python",
      "LangChain",
      "RAG",
      "Pinecone",
      "LLM",
      "Vector Search",
    ],
    githubUrl: "https://github.com/Ashutosh3678/RFP",
    liveUrl: "",
    featured: true,
  },
  {
    title: "Deepfake Detection System",
    description:
      "A deepfake detection pipeline using deep learning and computer vision techniques to identify manipulated facial media from images and videos, with preprocessing, feature extraction, and CNN-based model training for classification of authentic vs synthetic content.",
    image: "",
    tech: [
      "Python",
      "Deep Learning",
      "CNN",
      "Computer Vision",
      "Flask",
    ],
    githubUrl: "https://github.com/Ashutosh3678/Deepfake-Detection",
    liveUrl: "",
    featured: true,
  },
];
