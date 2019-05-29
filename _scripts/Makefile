%.pdf: %.md
	pandoc -N --template=sig.tex $< --pdf-engine=xelatex -o $@    

all: child-protection-policy.pdf

clean:
	rm -f child-protection-policy.pdf