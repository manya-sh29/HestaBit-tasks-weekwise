def build_image_context(results, max_ocr_chars=300):
   
    context_blocks = []

    for idx, res in enumerate(results, 1):
        block = (
            f"[Result {idx}]\n"
            f"Image Path: {res.get('image_path', 'N/A')}\n"
            f"Caption: {res.get('caption', '').strip()}\n"
            f"OCR Text: {res.get('ocr_text', '')[:max_ocr_chars].strip()}\n"
        )
        context_blocks.append(block)

    return "\n".join(context_blocks)
