def format_duration(seconds):
    hours = seconds // 3600
    minutes = (seconds % 3600) // 60
    secs = seconds % 60
    
    # Seconds always have two digits
    secs_str = f"{secs:02d}"
    
    if hours > 0:
        # If there are hours, minutes must be two digits (e.g., 1:05:03)
        return f"{hours}:{minutes:02d}:{secs_str}"
    else:
        # If no hours, minutes omit leading zeros (e.g., 5:03 or 0:45)
        return f"{minutes}:{secs_str}"
