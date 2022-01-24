def detectCapitalUse(word):
    if word in [word.upper(), word.lower(), word.capitalize()]:
        return True
    else:
        return False