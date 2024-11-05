import { NextResponse } from 'next/server';

interface File {
  id: string;
  name: string;
  mimeType: string;
  thumbnailLink?: string; 
  webContentLink?: string; 
}

export async function GET() {
  try {
    const folderId = process.env.GOOGLE_FOLDER_ID;
    const apiKey = process.env.GOOGLE_API_KEY;

    const response = await fetch(
      `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}&fields=files(id,name,mimeType,webContentLink)`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch photos, status: ${response.status}`);
    }

    const data = await response.json();
    
    const uniqueNames = new Set<string>();

    const filteredPhotos = data.files.filter((photo: File) => {
      const isImage = 
        photo.mimeType === 'image/png' || 
        photo.mimeType === 'image/jpeg' || 
        photo.mimeType === 'image/jpg' || 
        photo.mimeType === 'image/JPG';
      
      const isUnique = !uniqueNames.has(photo.name);

      if (isImage && isUnique && photo.webContentLink) {
        uniqueNames.add(photo.name);
        return true; 
      }
      return false; 
    });

    return NextResponse.json(filteredPhotos);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}