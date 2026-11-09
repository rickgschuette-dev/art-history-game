with open('content/cards.js', encoding='utf-8') as f:
    js = f.read()

# The LM-27 intro contains a literal backslash followed by u2014
# In Python raw string r'—' is backslash + u2014 (NOT em-dash)
old = r'intro:"A king on horseback, indoors, high up a pillar — and nobody knows who he is. Can you find three features?"'
new = 'intro:"Almost 800 years ago, a sculptor carved a king on horseback and attached him, life-size, to a pillar inside this German cathedral. He carries no weapon, no shield and no banner. Scholars have argued for centuries about who he is. Why would an artist leave out the clues that would identify a famous person?"'

count = js.count(old)
print(f'Matches: {count}')
if count == 1:
    js = js.replace(old, new)
    with open('content/cards.js', 'w', encoding='utf-8') as f:
        f.write(js)
    print('Done')
elif count == 0:
    # Try different approach - find and manually replace
    idx = js.find('A king on horseback, indoors, high up a pillar')
    print(f'Position of text: {idx}')
    if idx >= 0:
        # Find the intro: before this
        start = js.rfind('intro:"', 0, idx)
        end = js.find('"', idx + 50)  # find closing quote after the text
        # Find actual end
        intro_text = js[start:end+1]
        print('Found intro:', repr(intro_text[:100]))
        js = js[:start] + new + js[end+1:]
        with open('content/cards.js', 'w', encoding='utf-8') as f:
            f.write(js)
        print('Fixed via position')
